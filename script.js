document.querySelector('.calc').addEventListener('click',()=>{
  let l1 = parseFloat(document.querySelector('.l1').value);
  let l2 = parseFloat(document.querySelector('.l2').value);
  let w1 = parseFloat(document.querySelector('.w1').value);
  let w2 = parseFloat(document.querySelector('.w2').value);
  let h1 = parseFloat(document.querySelector('.h1').value);
  let h2 = parseFloat(document.querySelector('.h2').value);
  let h3 = parseFloat(document.querySelector('.h3').value);
  let al = (l1+l2)/2
  let aw = (w1+w2)/2
  let value = (al * aw).toFixed(2)
  let ah = (h1+h2+h3)/3
  let soln = (ah * value).toFixed(3)
  document.querySelector('.result').innerHTML = 'Solution:  '+ soln
})