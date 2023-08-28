const hamburgar = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const faSolid = document.querySelector('.fa-bars')

hamburgar.addEventListener('click',()=>{
    menu.classList.toggle("hidden")
    faSolid.classList.toggle('fa-xmark')
})