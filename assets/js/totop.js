/**
 * Small script that powers the to-top button.
 */

function showToTop() {
  let elem = document.getElementById("to-top");
  let offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (elem === null) {return;}
  elem.style.opacity = Number((offset > window.outerHeight * 0.5))
}

document.addEventListener("scroll", showToTop);