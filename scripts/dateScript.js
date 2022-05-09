let i1 = 0;

let  = document.getElementsByClassName('');
let  = document.getElementById('');
console.log(blckDt);
console.log(pBlckDt);
blckDt.addEventListener('click', () => {
  console.log('blckDt clicked');
  i1++;
  console.log(i1);
  if (i1%2==1) {
    pBlckDt.style.color = "#f6b02d";
  	pBlckDt.style.fontSize = "26px";
  } 
  if (i1%2==0) {
  	pBlckDt.style.color = "#fff";
  	pBlckDt.style.fontSize = "16px";
  }
});
