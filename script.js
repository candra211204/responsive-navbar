const navHamburger = document.querySelector('.navbar-hamburger input');
const navUl = document.querySelector('nav ul');

navHamburger.addEventListener('click', function() {
    navUl.classList.toggle('slide'); 
});