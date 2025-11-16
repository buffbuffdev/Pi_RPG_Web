// Inventory renderer + DB listener (keeps UI in sync even if main.js order differs)

let _invRef = null;

function renderInventaire() {
  const container = document.getElementById("inventaireContainer");
  if (!container) return;
  container.innerHTML = "";

  const inv = window.inventaire || {};
  const itemsMap = window.items || {};

  // If no inventory, show empty state
  if (Object.keys(inv).length === 0) {
    container.innerHTML = '<div class="empty-inventory">No items</div>';
    updateItemSelect();
    return;
  }

  for (const id in inv) {
    const qty = inv[id]?.quantity || 0;
    if (qty <= 0) continue;

    const item = itemsMap[id] || itemsMap[String(id)] || itemsMap[Number(id)];
    const name = item?.name || `Item ${id}`;
    const icon = item?.icon || 'icons/unknown.png';

    const card = document.createElement("div");
    card.className = "inventory-card";
    card.innerHTML = `
      <img src="${icon}" alt="${name}" class="inventory-card-icon">
      <div class="inventory-card-name">${name}</div>
      <div class="inventory-card-qty">x${qty}</div>
    `;
    card.addEventListener("click", () => openSellForm(id));
    container.appendChild(card);
  }

  updateItemSelect();
}

function openSellForm(itemId) {
  const select = document.getElementById("itemSelect");
  const qtyInput = document.getElementById("quantityInput");
  const priceInput = document.getElementById("priceInput");
  const venteBox = document.getElementById("venteContainer");
  if (!select || !qtyInput || !priceInput || !venteBox) return;

  updateItemSelect();
  select.value = itemId;
  qtyInput.max = (window.inventaire?.[itemId]?.quantity) || 1;
  qtyInput.value = 1;
  priceInput.value = 50;

  venteBox.classList.add("highlight");
  setTimeout(() => venteBox.classList.remove("highlight"), 800);
  venteBox.scrollIntoView({ behavior: "smooth", block: "center" });

  if (typeof showToast === "function") showToast(`📦 Selling : ${window.items?.[itemId]?.name || itemId}`);
}

function updateItemSelect() {
  const select = document.getElementById("itemSelect");
  if (!select) return;
  select.innerHTML = '<option value="">-- Choisir --</option>';
  const inv = window.inventaire || {};
  const itemsMap = window.items || {};

  for (const id in inv) {
    const qty = inv[id]?.quantity || 0;
    if (qty <= 0) continue;
    const item = itemsMap[id] || itemsMap[String(id)] || itemsMap[Number(id)];
    const name = item?.name || `Item ${id}`;
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = `${name} (x${qty})`;
    select.appendChild(opt);
  }
}

// Attach realtime listener for current user's inventory if Firebase present
if (typeof firebase !== "undefined") {
  const auth = firebase.auth();
  const db = firebase.database();

  auth.onAuthStateChanged(user => {
    // detach previous ref
    if (_invRef) {
      _invRef.off();
      _invRef = null;
    }

    if (!user) {
      window.inventaire = {};
      renderInventaire();
      return;
    }

    const uid = user.uid;
    _invRef = db.ref("inventaire/" + uid);
    _invRef.on("value", snap => {
      window.inventaire = snap.val() || {};
      // ensure items map exists (items listener may be elsewhere)
      if (typeof renderInventaire === "function") renderInventaire();
      if (typeof updateItemSelect === "function") updateItemSelect();
    });
  });
} else {
  console.warn("inventaire.js: Firebase not loaded — inventory will not auto-update.");
}

// --- NEW: Sell form handler (push sale to /bourse and decrement inventory atomically)
function setupSellFormHandler() {
  if (typeof firebase === "undefined") return;
  const db = firebase.database();
  const auth = firebase.auth();

  const venteForm = document.getElementById("venteForm");
  if (!venteForm) return;

  // prevent double-binding
  if (venteForm._hasHandler) return;
  venteForm._hasHandler = true;

  venteForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      if (typeof showToast === "function") showToast("Please sign in to sell", "error");
      return;
    }
    const uid = user.uid;
    const itemId = document.getElementById("itemSelect")?.value;
    const quantity = parseInt(document.getElementById("quantityInput")?.value || 0, 10);
    const price = parseInt(document.getElementById("priceInput")?.value || 0, 10);

    if (!itemId || !quantity || !price) {
      if (typeof showToast === "function") showToast("⚠️ Remplis tous les champs", "error");
      return;
    }

    const currentQty = Number(window.inventaire?.[itemId]?.quantity) || 0;
    if (quantity <= 0 || quantity > currentQty) {
      if (typeof showToast === "function") showToast("❌ Quantité invalide", "error");
      return;
    }

    const submitBtn = venteForm.querySelector("button[type='submit']") || venteForm.querySelector("button");
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Processing..."; }

    try {
      // 1) create sale entry under /bourse
      const newSaleRef = db.ref("bourse").push();
      await newSaleRef.set({ itemId: String(itemId), seller: uid, quantity, price });

      // 2) decrement inventory atomically at DB
      const invQtyRef = db.ref(`inventaire/${uid}/${itemId}/quantity`);
      await invQtyRef.transaction(current => {
        current = Number(current) || 0;
        const next = current - quantity;
        return next > 0 ? next : null; // remove node when zero
      });

      // local optimistic update (will be synced by listener)
      if (window.inventaire?.[itemId]) {
        window.inventaire[itemId].quantity = Math.max(0, (window.inventaire[itemId].quantity || 0) - quantity);
        if (window.inventaire[itemId].quantity <= 0) delete window.inventaire[itemId];
      }

      if (typeof renderInventaire === "function") renderInventaire();
      if (typeof updateItemSelect === "function") updateItemSelect();

      if (typeof showToast === "function") showToast(`✅ Vente : ${quantity} x ${window.items?.[itemId]?.name || itemId} à ${price} Pi`, "success");
      venteForm.reset();
    } catch (err) {
      console.error("sell error:", err);
      if (typeof showToast === "function") showToast("Erreur lors de la mise en vente", "error");
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Sell"; }
    }
  });
}

// initialize handler on DOM ready and whenever auth state changes
document.addEventListener("DOMContentLoaded", setupSellFormHandler);
if (typeof firebase !== "undefined") {
  firebase.auth().onAuthStateChanged(() => setupSellFormHandler());
}

// expose for debug/use
window.renderInventaire = renderInventaire;
