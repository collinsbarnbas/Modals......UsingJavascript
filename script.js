'use strict';

//every button in the page require eventListner
const btnSet = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let flag = false;
let modalFunct = function(){
    flag = true;
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
let modalFunctCancel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i =0; i<btnSet.length;i++){
    btnSet[i].addEventListener
    ('click',modalFunct);
}
document.querySelector('.close-modal').addEventListener
('click',modalFunctCancel);
overlay.addEventListener('click',modalFunctCancel);
document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key === 'Escape' && flag ){
        console.log(true);
        modalFunctCancel();   
    }
})