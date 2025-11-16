// Faucet: claim FAUCET_AMOUNT once per COOLDOWN_MS, update /solde/<uid>/amount and /faucet/<uid>/lastClaim

const FAUCET_AMOUNT = 100;
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24h

if (typeof firebase === 'undefined') {
  console.warn('faucet.js: Firebase not loaded.');
} else {
  const auth = firebase.auth();
  const db = firebase.database();

  const soldeAmountEl = document.getElementById('soldeAmount');
  const faucetBtn = document.getElementById('faucetBtn');
  const toastEl = document.getElementById('toast');

  function showToast(msg, duration = 3000) {
    if (!toastEl) { alert(msg); return; }
    toastEl.textContent = msg;
    toastEl.classList.add('toast--visible');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove('toast--visible'), duration);
  }

  let currentUid = null;
  let soldeListener = null;

  // keep UI in sync when auth state changes
  auth.onAuthStateChanged(user => {
    if (soldeListener) { soldeListener.off(); soldeListener = null; }
    if (user) {
      currentUid = user.uid;
      // listen to amount child to update display
      soldeListener = db.ref('solde/' + currentUid + '/amount');
      soldeListener.on('value', snap => {
        const val = snap.val(); if (soldeAmountEl) soldeAmountEl.textContent = val == null ? '0' : String(val);
      });
      if (faucetBtn) { faucetBtn.disabled = false; faucetBtn.textContent = 'Claim Faucet'; }
    } else {
      currentUid = null;
      if (soldeAmountEl) soldeAmountEl.textContent = '0';
      if (faucetBtn) { faucetBtn.disabled = true; faucetBtn.textContent = 'Sign in to claim'; }
    }
  });

  async function claimFaucet() {
    const user = auth.currentUser;
    if (!user) { showToast('Please sign in to claim'); return; }
    const uid = user.uid;
    faucetBtn.disabled = true; faucetBtn.textContent = 'Processing...';

    const faucetRef = db.ref('faucet/' + uid + '/lastClaim');
    const amountRef = db.ref('solde/' + uid + '/amount');

    try {
      const lastSnap = await faucetRef.once('value');
      const last = lastSnap.val() || 0;
      const now = Date.now();
      if (now - last < COOLDOWN_MS) {
        const remain = COOLDOWN_MS - (now - last);
        const hours = Math.ceil(remain / (60*60*1000));
        showToast('Faucet already claimed — try again in ' + hours + 'h');
        faucetBtn.disabled = false; faucetBtn.textContent = 'Claim Faucet';
        return;
      }

      await new Promise((resolve, reject) => {
        amountRef.transaction(current => {
          return (Number(current) || 0) + FAUCET_AMOUNT;
        }, (err, committed, snap) => {
          if (err) return reject(err);
          if (!committed) return reject(new Error('Transaction aborted'));
          resolve(snap.val());
        });
      });

      await faucetRef.set(now);
      showToast('You received ' + FAUCET_AMOUNT + ' Pi!');
    } catch (err) {
      console.error(err);
      showToast('Error: ' + (err.message || 'failed'));
    } finally {
      faucetBtn.disabled = false; faucetBtn.textContent = 'Claim Faucet';
    }
  }

  if (faucetBtn) faucetBtn.addEventListener('click', e => { e.preventDefault(); claimFaucet(); });
}