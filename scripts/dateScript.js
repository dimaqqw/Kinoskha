//date block 1
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;
let i7 = 0;
//////////////////////////////////////////////
let blckDt = document.getElementById('blockDate');
let pBlckDt = document.getElementById('pBlockDate');
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