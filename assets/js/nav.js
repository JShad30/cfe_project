/*const navbarBurger = document.getElementById('nav-button');
const navbarSection = document.getElementById('navbar-content-section');
const navbarCross = document.getElementById('nav-cross');



navbarBurger.addEventListener('click', navBurgerClicked);
navbarCross.addEventListener('click', navBurgerClicked);*/

const navbarBurger = document.getElementById('nav-button');

navbarBurger.addEventListener('click', navBurgerClicked);

function navBurgerClicked() {
  //navbarSection.classList.toggle('active');
  navbarBurger.classList.toggle('active');
  //navbarCross.classList.toggle('active');
}