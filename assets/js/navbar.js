/**
 * A small script to change the colour of stick navbars when the
 * user has scrolled past a certain limit.
 */
var bars = [];
var colour = "#3F51B5";

// https://coolors.co/f39800-db2b39-aa1155-f6d8ae-d90368
// Dogwood Rose :: d90368
// Light Crimson :: ea638c
// Pink (Pantone) :: d84797

function getNavbars() {
  bars = document.querySelectorAll(".navbar-sticky");
  updateNavbars();
}

function updateNavbars() {
  let offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let threshold = 0;

  bars.forEach(elem => {
    threshold = elem.dataset.threshold || 0;
    elem.style.backgroundColor = (offset > threshold) ? colour : "rgba(0,0,0,0)";
  });
}

document.addEventListener("load", getNavbars);
document.addEventListener("scroll", updateNavbars);
