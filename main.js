const m=document.getElementById('m'),n=document.getElementById('n'),r=document.getElementById('r'),balance=document.getElementById('balance');
if(m&&n&&r){const u=()=>{const t=parseFloat(m.value)||0,k=Math.max(1,parseInt(n.value)||1),share=t/k;r.textContent='Cada quien paga $'+share.toFixed(2);if(balance)balance.textContent='$ '+share.toFixed(2).replace('.',',')};m.oninput=n.oninput=u;u()}
const f=document.getElementById('f');if(f)f.onsubmit=e=>{e.preventDefault();document.getElementById('ok').textContent='¡Listo! Te avisaremos (demostración, no se guardó nada).'};
