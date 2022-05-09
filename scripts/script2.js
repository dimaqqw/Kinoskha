const arrayCinemas = document.querySelectorAll('.chIMG')
const date = document.querySelectorAll('.date')
console.log(arrayCinemas)
console.log(date)


let countCinemas = 0

for (let i = 0; i < arrayCinemas.length; i++) {
    arrayCinemas[i].addEventListener('click', selectFilm)
}
for (let i = 0; i < date.length; i++) {
    date[i].addEventListener('click', selectDate)
}

// function selectFilm(){
//     if(this.classList.contains('activeFilm')){
//         this.classList.remove('activeFilm')
//         this.parentNode.querySelector("figcaption").classList.remove('activeText')
//     }else {
//         this.classList.add('activeFilm')
//         this.parentNode.querySelector("figcaption").classList.add('activeText')
//     }
// }


function selectFilm() {
    if (this.classList.contains('activeFilm')) {
        this.classList.toggle('activeFilm')
        this.parentNode.querySelector("figcaption").classList.toggle('activeText')
    } else {
        this.classList.toggle('activeFilm')
        this.parentNode.querySelector("figcaption").classList.toggle('activeText')
        console.dir(this)
    }
}
function selectDate() {
    console.log(this)
    if (this.querySelector('p').classList.contains('activeDateText')) {
        this.querySelector('p').classList.toggle('activeDateText')
    } else {
        this.querySelector('p').classList.toggle('activeDateText')
    }
}



// Array.from(arrayCinemas).forEach(item => item.onclick = handler)
// function handler(e) {
//     console.log('click',e)
//     if(e.path[0].classList.contains('activeFilm')){
//         e.path[0]
//     }

// }