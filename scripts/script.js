// JavaScript Document
console.log("hi");

// hamburger menu 
// bron: https://codepen.io/zagaris/pen/qBmqQEN

const button = document.getElementById("hamburger");
const navUl = document.querySelector("nav ul");

button.addEventListener('click', () => {
    navUl.classList.toggle('show');
});


// carousel voorpagina
initCarousel('main section:nth-of-type(4)');

// carousel gerelateerde verhalen (damespagina)
initCarousel('main section:nth-of-type(5)');


function initCarousel(sectionSelector) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;

  const carousel = section.querySelector('ul');
  const buttons = section.querySelectorAll('button');

  if (buttons.length < 2) return;

  const previousButton = buttons[0];
  const nextButton = buttons[1];

  const scrollAmount = carousel.clientWidth * 0.5;

  nextButton.addEventListener('click', () => {
  carousel.scrollBy({
  left: scrollAmount,
  behavior: 'smooth'
  });
  });

  previousButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
  });
}

  // verberg/toon filters

const pageHeader = document.querySelector('.page-header');
const toggleFiltersButton = pageHeader.querySelector('button:nth-of-type(1)');
const main = document.querySelector('main');

toggleFiltersButton.addEventListener('click', () => {
  const filtersHidden = main.classList.toggle('filters-hidden');

  toggleFiltersButton.textContent = filtersHidden //bron: https://www.w3schools.com/jsref/prop_node_textcontent.asp
    ? 'Toon filters'
    : 'Verberg filters';
});
