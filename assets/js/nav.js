const navbarBurger = document.getElementById('nav-button');
const navbarSection = document.getElementById('navbar-content-section');
const navbarCross = document.getElementById('nav-cross');

function navBurgerClicked() {
  navbarSection.classList.toggle('active');
  navbarBurger.classList.toggle('active');
  navbarCross.classList.toggle('active');
}

navbarBurger.addEventListener('click', navBurgerClicked);
navbarCross.addEventListener('click', navBurgerClicked);