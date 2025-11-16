let playerId = null;
let items = {};
let inventaire = {};
let solde = 0;
let bourse = {};

// <-- Ajout : initialisation de la référence Firebase Realtime Database
const db = firebase.database();

firebase.auth().onAuthStateChanged(async user => {
  if (!user) return window.location.href = "login.html";
  playerId = user.uid;

  const [soldeSnap, invSnap] = await Promise.all([
    db.ref("solde/" + playerId).once("value"),
    db.ref("inventaire/" + playerId).once("value")
  ]);
  solde = soldeSnap.val()?.amount || 0;
  inventaire = invSnap.val() || {};
  window.inventaire = inventaire;

  await ensureSoldeHasUsername(playerId);

  initFirebaseSync();

  // <-- Ajout : listener dédié pour inventaire (garde l'UI à jour)
  db.ref("inventaire/" + playerId).on("value", snap => {
    inventaire = snap.val() || {};
    window.inventaire = inventaire;
    // si items sont déjà chargés, on peut rendre tout de suite
    if (typeof renderInventaire === "function") renderInventaire();
    if (typeof updateItemSelect === "function") updateItemSelect();
  });

  // Assure aussi que la liste items déclenche un rendu quand elle arrive
  db.ref("items").on("value", snap => {
    items = snap.val() || {};
    window.items = items;
    // when items load, re-render inventory & bourse to fix missing names
    if (typeof renderInventaire === "function") renderInventaire();
    if (typeof renderBourse === "function") renderBourse();
  });
});

function initFirebaseSync() {
  db.ref("items").on("value", snap => { items = snap.val() || {}; render(); });
  db.ref("inventaire/" + playerId).on("value", snap => { inventaire = snap.val() || {}; render(); });
  db.ref("solde/" + playerId).on("value", snap => { solde = snap.val()?.amount || 0; render(); });
  db.ref("bourse").on("value", snap => { bourse = snap.val() || {}; render(); });
}

function render() {
  renderInventaire();
  renderBourse();
  document.getElementById("soldeAmount").textContent = solde;
}

document.getElementById("venteForm").addEventListener("submit", async e => {
  e.preventDefault();
  const itemId = document.getElementById("itemSelect").value;
  const quantity = parseInt(document.getElementById("quantityInput").value);
  const price = parseInt(document.getElementById("priceInput").value);
  if (!itemId || !quantity || !price) return showToast("⚠️ Remplis tous les champs", "error");
  if (!inventaire[itemId] || inventaire[itemId].quantity < quantity) return showToast("❌ Quantité invalide", "error");

  const newSaleRef = db.ref("bourse").push();
  await newSaleRef.set({ itemId, seller: playerId, quantity, price });

  inventaire[itemId].quantity -= quantity;
  if (inventaire[itemId].quantity <= 0) delete inventaire[itemId];
  db.ref("inventaire/" + playerId).set(inventaire);

  showToast(`✅ Vente : ${quantity} x ${items[itemId]?.name} à ${price} Pi`, "success");
  document.getElementById("venteForm").reset();
});
