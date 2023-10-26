//Menu Open Close
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu');
}

const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        header.classList.add('active')
    } else{
        header.classList.remove('active');
    }
}
