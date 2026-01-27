// JavaScript Document

// hamburger menu 
// bron: https://codepen.io/zagaris/pen/qBmqQEN

const button = document.getElementById("hamburger");
const navUl = document.querySelector("nav ul");
const closeBtn = document.querySelector(".menu-close button");

button.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  navUl.classList.remove("show");
});


// carousel voorpagina
initCarousel('main section:nth-of-type(3)');

// carousel gerelateerde verhalen (damespagina)
initCarousel('main section:nth-of-type(4)');


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

// wishlist hartje
// bron: https://codepen.io/shooft/pen/QwjxmeL (animaties-oefening 3)

  function toggleWishlist(event) {
    let clickedHeart = event.target;


    let isLiked = clickedHeart.getAttribute("aria-pressed") === "true";

    clickedHeart.setAttribute("aria-pressed", !isLiked);

  const clone = clickedHeart.cloneNode(true);
  const heartReaction = clickedHeart.getBoundingClientRect();
  const bag = document.querySelector('nav button[aria-label="Winkelmand"]');
  const bagReaction = bag.getBoundingClientRect();

  document.body.appendChild(clone);

  // start vanaf product
  clone.style.position = "fixed";
  clone.style.left = heartReaction.left + "px";
  clone.style.top = heartReaction.top + "px";
  clone.style.fontSize = "100px";
  clone.style.color = "red";
  clone.style.background = "transparent";
  clone.style.border = "none";
  clone.style.zIndex = "9999";
  clone.style.pointerEvents = "none";
  clone.style.transition = "all 0.6s ease";

  // smooth naar voren
  clone.getBoundingClientRect();

  // hier gaat het hartje naar het midden + groter
  clone.style.left = "50%";
  clone.style.top = "50%";
  clone.style.transform = "translate(-50%, -50%) scale(3)";

  // daarna naar het winkelmandje
  setTimeout(() => {
    clone.style.left = bagReaction.left + bagReaction.width / 2 + "px";
    clone.style.top = bagReaction.top + bagReaction.height / 2 + "px";
    clone.style.transform = "scale(0.5)";
  }, 600);

  // haalt de clone weer weg
  setTimeout(() => {
    clone.remove();
  }, 1200);

  // geeft aan hoeveel er nu in het winkelmandje zit
    updateWinkelmandCount();
  }

  document
    .querySelectorAll('main > section:nth-of-type(1) li button')
    .forEach(button => {
      button.addEventListener("click", toggleWishlist);
    });

  function updateWinkelmandCount() {
    let likedItems = document.querySelectorAll(
      'main > section:nth-of-type(1) li button[aria-pressed="true"]'
    ).length;

    let winkelmandCounter = document.querySelector(
      'nav button[aria-label="Winkelmand"] span'
    );

    winkelmandCounter.textContent = likedItems;

  }
  

