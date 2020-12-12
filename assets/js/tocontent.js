/**
 * Small script that powers the to-content button.
 */

function showToContent() {
  let elem = document.getElementById("to-content");
  let offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let threshold = window.height || screen.height || 900;

  if (elem === null) {return;}
  elem.style.opacity = Number((offset < (threshold * 0.2)))
}

document.addEventListener("load", showToContent);
document.addEventListener("scroll", showToContent);