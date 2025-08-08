
function fakeSubmit(e){
  e.preventDefault();
  const r = document.getElementById('contact-result');
  if(r){ r.hidden = false; r.scrollIntoView({behavior:'smooth'}); }
  return false;
}
document.addEventListener('DOMContentLoaded', ()=>{
  const level = document.getElementById('defcon-level');
  let n = 3;
  setInterval(()=>{
    n = n<=1?5:n-1;
    if(level){ level.textContent = n; }
  }, 3500);
});
