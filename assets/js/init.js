/**
 * Initialization script for MaterializeCSS.
 */

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'right', preventScrolling: false
  });

  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    preventScrolling: false
  });

  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});

  var elems = document.querySelectorAll('.collapsible.expandable');
  var instances = M.Collapsible.init(elems, {
    accordion: false
  });

  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {
    transitionMovement:-10,
    inDuration: 200,
    outDuration: 200,
    enterDelay: 0,
    exitDelay: 0
  });
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {});
});