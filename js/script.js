// Array di immagini
const images = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];

const title = ['Svezia','Svizzera','Gran Bretagna','Germania','Paradise'];

const text = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
'Lorem ipsum',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'];

// creo un ciclo con gli array
for(let i=0; i < images.length; i++){
    // richiamo la classe che contiene tutti gli elementi e ne ricreo i contenuti in js
    document.querySelector('.slider-main').innerHTML += `
    <div class="main-box">
        <img src="${images[i]}" alt="${title[i]}">
        <div class="testo">
            <h2>${title[i]}</h2>
            <p>${text[i]}</p>
        </div>
    </div>`;

    document.querySelector('.sidebox-container').innerHTML += `
    <div class="box">
        <img src="${images[i]}" alt="${title[i]} thumbnails">
    </div>
    `;
}

// aggiungo la classe "active" alla classe contenente gli elementi esistenti
document.querySelector('.main-box').classList.add('active');

document.querySelector('.box').classList.add('active');


let su = document.querySelector('.su');
let giu = document.querySelector('.giu');

let bigBox = document.getElementsByClassName('main-box');
let smallBox = document.getElementsByClassName('box');

let contatore = 0;

giu.addEventListener('click', function(){
    bigBox[contatore].classList.remove('active');
    smallBox[contatore].classList.remove('active');
    if(contatore+1 < smallBox.length){
        contatore ++;
    }else{
        contatore = 0;
    }
    
    bigBox[contatore].classList.add('active');
    smallBox[contatore].classList.add('active');
    

})

su.addEventListener('click', function(){
    bigBox[contatore].classList.remove('active');
    smallBox[contatore].classList.remove('active');
    if(contatore > 0){
        contatore --;
    }else{
        contatore = smallBox.length-1;
    }
    bigBox[contatore].classList.add('active');
    smallBox[contatore].classList.add('active');

})












