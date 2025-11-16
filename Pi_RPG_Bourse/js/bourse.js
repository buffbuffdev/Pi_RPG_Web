// Replace previous content with a defensive listener + renderer that won't overwrite your site-wide helpers.

(function () {
  if (typeof firebase === 'undefined') { console.warn('bourse.js: Firebase not loaded.'); return; }
  const db = firebase.database();
  const auth = firebase.auth();

  const fmtPi = window.formatPi || (amt => `${amt} <img src="icons/pigold2.png" class="pi-icon" alt="Pi">`);
  const toast = window.showToast || ((m) => { const t = document.getElementById('toast'); if (t) { t.innerText = m; t.classList.add('toast--visible'); setTimeout(()=>t.classList.remove('toast--visible'),2500);} else console.log(m); });

  window.bourse = window.bourse || {};
  window.items = window.items || {};
  window.playerId = window.playerId || null;
  window.solde = window.solde || 0;
  window.inventaire = window.inventaire || {};

  function renderBourse() {
    const container = document.getElementById('bourseContainer');
    if (!container) return;
    container.innerHTML = '';
    const localBourse = window.bourse || {};
    for (const saleKey in localBourse) {
      const saleData = localBourse[saleKey];
      if (!saleData) continue;

      const rawId = saleData.itemId;
      const idStr = String(rawId);
      const idNum = Number(rawId);
      const item = window.items?.[rawId] || window.items?.[idStr] || window.items?.[idNum] || { name: `Item ${rawId}`, icon: 'icons/unknown.png' };

      const isOwnSale = saleData.seller === (auth.currentUser && auth.currentUser.uid);
      const card = document.createElement('div');
      card.className = 'market-card';

      card.innerHTML = `
        <img src="${item.icon}" alt="${item.name}" class="market-card-icon">
        <div class="market-card-title">${item.name}</div>
        <div class="market-card-qty">Quantity: ${saleData.quantity}</div>
        <div class="market-card-price">${fmtPi(saleData.price)}</div>
      `;

      if (!isOwnSale) {
        const btn = document.createElement('button');
        btn.className = 'btn-primary btn-small';
        btn.textContent = 'Buy';
        btn.addEventListener('click', () => buySale(saleKey, saleData));
        card.appendChild(btn);
      } else {
        const you = document.createElement('div'); you.className = 'your-sale'; you.textContent = 'Your sale'; card.appendChild(you);
      }

      container.appendChild(card);
    }
  }

  async function buySale(saleKey, saleData) {
    const user = auth.currentUser;
    if (!user) { toast('Please sign in to buy'); return; }
    const buyerId = user.uid;
    const sellerId = saleData.seller;
    const itemId = saleData.itemId;
    const qty = 1;
    const price = Number(saleData.price) || 0;
    const total = price * qty;

    // quick client checks
    const buyerAmountSnap = await db.ref('solde/' + buyerId + '/amount').once('value');
    const buyerAmount = Number(buyerAmountSnap.val()) || 0;
    if (buyerAmount < total) { toast('Not enough balance'); return; }
    if (buyerId === sellerId) { toast('Cannot buy your own sale'); return; }

    const saleQtyRef = db.ref('bourse/' + saleKey + '/quantity');
    const sellerSoldeRef = db.ref('solde/' + sellerId + '/amount');
    const buyerSoldeRef = db.ref('solde/' + buyerId + '/amount');
    const buyerInvRef = db.ref('inventaire/' + buyerId + '/' + itemId + '/quantity');

    try {
      // 1) decrement sale quantity atomically
      await new Promise((resolve, reject) => {
        saleQtyRef.transaction(current => {
          current = Number(current) || 0;
          if (current < qty) return; // abort
          return current - qty;
        }, (err, committed, snap) => {
          if (err) return reject(err);
          if (!committed) return reject(new Error('Sale quantity insufficient'));
          resolve(snap.val());
        });
      });

      // 2) transfer funds
      await sellerSoldeRef.transaction(current => (Number(current) || 0) + total);
      await buyerSoldeRef.transaction(current => (Number(current) || 0) - total);

      // 3) add item to buyer inventory
      await buyerInvRef.transaction(current => (Number(current) || 0) + qty);

      // 4) cleanup sale if needed
      const newQtySnap = await saleQtyRef.once('value');
      if ((Number(newQtySnap.val()) || 0) <= 0) await db.ref('bourse/' + saleKey).remove();

      toast(`You bought 1 × ${window.items[itemId]?.name || itemId} for ${fmtPi(total)}`);
      // optimistic UI update
      renderBourse();
    } catch (err) {
      console.error('buySale error', err);
      toast('Purchase failed: ' + (err.message || 'error'));
    }
  }

  // ensure items are available for name resolution even if main.js not yet ran
  db.ref('items').on('value', snap => { window.items = snap.val() || {}; renderBourse(); });

  // listen bourse entries
  db.ref('bourse').on('value', snap => { window.bourse = snap.val() || {}; renderBourse(); });

  // expose for debug
  window.renderBourse = renderBourse;
})();
