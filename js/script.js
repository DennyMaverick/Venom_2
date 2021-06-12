const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuCloseButton = document.querySelector('.menu-close');

menuButton.addEventListener("click", function() {
    menu.classList.add('is-active');
    menuCloseButton.classList.add('is-active');
});
menuCloseButton.addEventListener("click", function(){
    menu.classList.remove('is-active');
    menuCloseButton.classList.remove('is-active'); 
});