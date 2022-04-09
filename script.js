let int1 = 0;
let int2 = 0;
let int3 = 0;
let int4 = 0;
//==========================================//
let first = document.getElementById('first');
let textF1 = document.getElementById('firstF');
console.log(first);
first.addEventListener('click', () => {
  console.log('first clicked');
  int1++;
  console.log(int1);
  if (int1%2==1) {
  	textF1.style.color = "#f6b02d";
  	first.style.filter = "brightness(30%)";
  } 
  if (int1%2==0) {
  	textF1.style.color = "#fff";
  	first.style.filter = "brightness(100%)";
  }
});

//==========================================//

let second = document.getElementById('second');
let textF2 = document.getElementById('secondF');
console.log(second);
second.addEventListener('click', () => {
	console.log('second clicked');
	int2++;
	console.log(int2);
	if (int2%2==1) {
		textF2.style.color = "#f6b02d";
  		second.style.filter = "brightness(30%)";
	}
	if (int2%2==0) {
		textF2.style.color = "#fff";
  		second.style.filter = "brightness(100%)";
	}
});

//==========================================//

let third = document.getElementById('third');
let textF3 = document.getElementById('thirdF');
console.log(third);

third.addEventListener('click', () => {
  console.log('third clicked');
  int3++;
	console.log(int3);
	if (int3%2==1) {
		textF3.style.color = "#f6b02d";
  		third.style.filter = "brightness(30%)";
	}
	if (int3%2==0) {
		textF3.style.color = "#fff";
  		third.style.filter = "brightness(100%)";
	}
});

//==========================================//

let fourth = document.getElementById('fourth');
let textF4 = document.getElementById('fourthF');
console.log(fourth);

fourth.addEventListener('click', () => {
  console.log('fourth clicked');
  int4++;
	console.log(int4);
	if (int4%2==1) {
		textF4.style.color = "#f6b02d";
  		fourth.style.filter = "brightness(30%)";
	}
	if (int4%2==0) {
		textF4.style.color = "#fff";
  		fourth.style.filter = "brightness(100%)";
	}
});