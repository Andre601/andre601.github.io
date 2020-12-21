/*!
 * Font Awesome Free 5.12.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * 
 * This version was modified to contain only the SVGs used on the website.
 */

! function() {
  "use strict";
  var c = {},
    l = {};
  try {
    "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
  } catch (c) {}
  var h = (c.navigator || {}).userAgent,
    z = void 0 === h ? "" : h,
    v = c,
    a = l,
    m = (v.document, !!a.documentElement && !!a.head && "function" == typeof a.addEventListener && a.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), function() {
      try {
        return !0
      } catch (c) {
        return !1
      }
    }());

  function s(c, l, h) {
    return l in c ? Object.defineProperty(c, l, {
      value: h,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : c[l] = h, c
  }
  var e = v || {};
  e.___FONT_AWESOME___ || (e.___FONT_AWESOME___ = {}), e.___FONT_AWESOME___.styles || (e.___FONT_AWESOME___.styles = {}), e.___FONT_AWESOME___.hooks || (e.___FONT_AWESOME___.hooks = {}), e.___FONT_AWESOME___.shims || (e.___FONT_AWESOME___.shims = []);
  var t = e.___FONT_AWESOME___;

  function M(c, l) {
    var h = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
      z = void 0 !== h && h,
      v = Object.keys(l).reduce(function(c, h) {
        var z = l[h];
        return !!z.icon ? c[z.iconName] = z.icon : c[h] = z, c
      }, {});
    "function" != typeof t.hooks.addPack || z ? t.styles[c] = function(c) {
      for (var l = 1; l < arguments.length; l++) {
        var h = null != arguments[l] ? arguments[l] : {},
          z = Object.keys(h);
        "function" == typeof Object.getOwnPropertySymbols && (z = z.concat(Object.getOwnPropertySymbols(h).filter(function(c) {
          return Object.getOwnPropertyDescriptor(h, c).enumerable
        }))), z.forEach(function(l) {
          s(c, l, h[l])
        })
      }
      return c
    }({}, t.styles[c] || {}, v) : t.hooks.addPack(c, v), "fas" === c && M("fa", l)
  }
  var f = {"discord": [448, 512, [], "f392", "M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"], "github": [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"], "twitter": [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"], "patreon": [512, 512, [], "f3d9", "M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"], "youtube": [576, 512, [], "f167", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};

  ! function(c) {
    try {
      c()
    } catch (c) {
      if (!m) throw c
    }
  }(function() {
    M("fab", f)
  })
}(),
function() {
  "use strict";
  var c = {},
    l = {};
  try {
    "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
  } catch (c) {}
  var h = (c.navigator || {}).userAgent,
    z = void 0 === h ? "" : h,
    v = c,
    a = l,
    m = (v.document, !!a.documentElement && !!a.head && "function" == typeof a.addEventListener && a.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), function() {
      try {
        return !0
      } catch (c) {
        return !1
      }
    }());

  function s(c, l, h) {
    return l in c ? Object.defineProperty(c, l, {
      value: h,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : c[l] = h, c
  }
  var e = v || {};
  e.___FONT_AWESOME___ || (e.___FONT_AWESOME___ = {}), e.___FONT_AWESOME___.styles || (e.___FONT_AWESOME___.styles = {}), e.___FONT_AWESOME___.hooks || (e.___FONT_AWESOME___.hooks = {}), e.___FONT_AWESOME___.shims || (e.___FONT_AWESOME___.shims = []);
  var t = e.___FONT_AWESOME___;

  function M(c, l) {
    var h = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
      z = void 0 !== h && h,
      v = Object.keys(l).reduce(function(c, h) {
        var z = l[h];
        return !!z.icon ? c[z.iconName] = z.icon : c[h] = z, c
      }, {});
    "function" != typeof t.hooks.addPack || z ? t.styles[c] = function(c) {
      for (var l = 1; l < arguments.length; l++) {
        var h = null != arguments[l] ? arguments[l] : {},
          z = Object.keys(h);
        "function" == typeof Object.getOwnPropertySymbols && (z = z.concat(Object.getOwnPropertySymbols(h).filter(function(c) {
          return Object.getOwnPropertyDescriptor(h, c).enumerable
        }))), z.forEach(function(l) {
          s(c, l, h[l])
        })
      }
      return c
    }({}, t.styles[c] || {}, v) : t.hooks.addPack(c, v), "fas" === c && M("fa", l)
  }
  var f = {};
  ! function(c) {
    try {
      c()
    } catch (c) {
      if (!m) throw c
    }
  }(function() {
    M("far", f)
  })
}(),
function() {
  "use strict";
  var c = {},
    l = {};
  try {
    "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
  } catch (c) {}
  var h = (c.navigator || {}).userAgent,
    z = void 0 === h ? "" : h,
    v = c,
    a = l,
    m = (v.document, !!a.documentElement && !!a.head && "function" == typeof a.addEventListener && a.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), function() {
      try {
        return !0
      } catch (c) {
        return !1
      }
    }());

  function s(c, l, h) {
    return l in c ? Object.defineProperty(c, l, {
      value: h,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : c[l] = h, c
  }
  var e = v || {};
  e.___FONT_AWESOME___ || (e.___FONT_AWESOME___ = {}), e.___FONT_AWESOME___.styles || (e.___FONT_AWESOME___.styles = {}), e.___FONT_AWESOME___.hooks || (e.___FONT_AWESOME___.hooks = {}), e.___FONT_AWESOME___.shims || (e.___FONT_AWESOME___.shims = []);
  var t = e.___FONT_AWESOME___;

  function M(c, l) {
    var h = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
      z = void 0 !== h && h,
      v = Object.keys(l).reduce(function(c, h) {
        var z = l[h];
        return !!z.icon ? c[z.iconName] = z.icon : c[h] = z, c
      }, {});
    "function" != typeof t.hooks.addPack || z ? t.styles[c] = function(c) {
      for (var l = 1; l < arguments.length; l++) {
        var h = null != arguments[l] ? arguments[l] : {},
          z = Object.keys(h);
        "function" == typeof Object.getOwnPropertySymbols && (z = z.concat(Object.getOwnPropertySymbols(h).filter(function(c) {
          return Object.getOwnPropertyDescriptor(h, c).enumerable
        }))), z.forEach(function(l) {
          s(c, l, h[l])
        })
      }
      return c
    }({}, t.styles[c] || {}, v) : t.hooks.addPack(c, v), "fas" === c && M("fa", l)
  }
  var f = {"angle-double-up": [320, 512, [], "f102", "M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"], "angle-double-down": [320, 512, [], "f103", "M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"], "code": [640, 512, [], "f121", "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"], "plus-square": [448, 512, [], "f0fe", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"], "gamepad": [640, 512, [], "f11b", "M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"], "info-circle": [512, 512, [], "f05a", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"], "kiss-wink-heart": [504, 512, [], "f598", "M501.1 402.5c-8-20.8-31.5-31.5-53.1-25.9l-8.4 2.2-2.3-8.4c-5.9-21.4-27-36.5-49-33-25.2 4-40.6 28.6-34 52.6l22.9 82.6c1.5 5.3 7 8.5 12.4 7.1l83-21.5c24.1-6.3 37.7-31.8 28.5-55.7zm-177.6-4c-5.6-20.3-2.3-42 9-59.7 29.7-46.3 98.7-45.5 127.8 4.3 6.4.1 12.6 1.4 18.6 2.9 10.9-27.9 17.1-58.2 17.1-90C496 119 385 8 248 8S0 119 0 256s111 248 248 248c35.4 0 68.9-7.5 99.4-20.9-.3-.7-23.9-84.6-23.9-84.6zM168 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm120 156c0 19.2-28.7 41.5-71.5 44-8.5.8-12.1-11.8-3.6-15.4l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-6-2.5-5.7-12.3 0-14.8l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-8.8-3.7-4.6-16.6 3.6-15.4 42.8 2.5 71.5 24.8 71.5 44 0 13-13.4 27.3-35.2 36C274.6 368.7 288 383 288 396zm16-179c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S400 181 404 206.2c1.7 11.1-11.3 18.3-19.8 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L304 217z"], "home": [576, 512, [], "f015", "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"], "bars": [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"], "check": [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"], "book-open": [576, 512, [], "f518", "M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"]};

  ! function(c) {
    try {
      c()
    } catch (c) {
      if (!m) throw c
    }
  }(function() {
    M("fas", f)
  })
}(),
function() {
  "use strict";

  function c(l) {
    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(c) {
      return typeof c
    } : function(c) {
      return c && "function" == typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
    })(l)
  }

  function l(c, l) {
    for (var h = 0; h < l.length; h++) {
      var z = l[h];
      z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(c, z.key, z)
    }
  }

  function h(c, l, h) {
    return l in c ? Object.defineProperty(c, l, {
      value: h,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : c[l] = h, c
  }

  function z(c) {
    for (var l = 1; l < arguments.length; l++) {
      var z = null != arguments[l] ? arguments[l] : {},
        v = Object.keys(z);
      "function" == typeof Object.getOwnPropertySymbols && (v = v.concat(Object.getOwnPropertySymbols(z).filter(function(c) {
        return Object.getOwnPropertyDescriptor(z, c).enumerable
      }))), v.forEach(function(l) {
        h(c, l, z[l])
      })
    }
    return c
  }

  function v(c, l) {
    return function(c) {
      if (Array.isArray(c)) return c
    }(c) || function(c, l) {
      var h = [],
        z = !0,
        v = !1,
        a = void 0;
      try {
        for (var m, s = c[Symbol.iterator](); !(z = (m = s.next()).done) && (h.push(m.value), !l || h.length !== l); z = !0);
      } catch (c) {
        v = !0, a = c
      } finally {
        try {
          z || null == s.return || s.return()
        } finally {
          if (v) throw a
        }
      }
      return h
    }(c, l) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function a(c) {
    return function(c) {
      if (Array.isArray(c)) {
        for (var l = 0, h = new Array(c.length); l < c.length; l++) h[l] = c[l];
        return h
      }
    }(c) || function(c) {
      if (Symbol.iterator in Object(c) || "[object Arguments]" === Object.prototype.toString.call(c)) return Array.from(c)
    }(c) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var m = function() {},
    s = {},
    e = {},
    t = null,
    M = {
      mark: m,
      measure: m
    };
  try {
    "undefined" != typeof window && (s = window), "undefined" != typeof document && (e = document), "undefined" != typeof MutationObserver && (t = MutationObserver), "undefined" != typeof performance && (M = performance)
  } catch (c) {}
  var f = (s.navigator || {}).userAgent,
    r = void 0 === f ? "" : f,
    n = s,
    H = e,
    i = t,
    o = M,
    V = !!n.document,
    C = !!H.documentElement && !!H.head && "function" == typeof H.addEventListener && "function" == typeof H.createElement,
    L = ~r.indexOf("MSIE") || ~r.indexOf("Trident/"),
    u = 16,
    d = "fa",
    p = "svg-inline--fa",
    b = "data-fa-i2svg",
    g = "data-fa-pseudo-element",
    S = "data-fa-pseudo-element-pending",
    A = "data-prefix",
    y = "data-icon",
    w = "fontawesome-i2svg",
    k = "async",
    _ = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    x = function() {
      try {
        return !0
      } catch (c) {
        return !1
      }
    }(),
    O = {
      fas: "solid",
      far: "regular",
      fal: "light",
      fad: "duotone",
      fab: "brands",
      fa: "solid"
    },
    Z = {
      solid: "fas",
      regular: "far",
      light: "fal",
      duotone: "fad",
      brands: "fab"
    },
    E = "fa-layers-text",
    q = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/,
    j = {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal"
    },
    N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    P = N.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    T = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
    F = {
      GROUP: "group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    },
    W = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", F.GROUP, F.SWAP_OPACITY, F.PRIMARY, F.SECONDARY].concat(N.map(function(c) {
      return "".concat(c, "x")
    })).concat(P.map(function(c) {
      return "w-".concat(c)
    })),
    R = n.FontAwesomeConfig || {};
  if (H && "function" == typeof H.querySelector) {
    [
      ["data-family-prefix", "familyPrefix"],
      ["data-replacement-class", "replacementClass"],
      ["data-auto-replace-svg", "autoReplaceSvg"],
      ["data-auto-add-css", "autoAddCss"],
      ["data-auto-a11y", "autoA11y"],
      ["data-search-pseudo-elements", "searchPseudoElements"],
      ["data-observe-mutations", "observeMutations"],
      ["data-mutate-approach", "mutateApproach"],
      ["data-keep-original-source", "keepOriginalSource"],
      ["data-measure-performance", "measurePerformance"],
      ["data-show-missing-icons", "showMissingIcons"]
    ].forEach(function(c) {
      var l = v(c, 2),
        h = l[0],
        z = l[1],
        a = function(c) {
          return "" === c || "false" !== c && ("true" === c || c)
        }(function(c) {
          var l = H.querySelector("script[" + c + "]");
          if (l) return l.getAttribute(c)
        }(h));
      null != a && (R[z] = a)
    })
  }
  var I = z({}, {
    familyPrefix: d,
    replacementClass: p,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
  }, R);
  I.autoReplaceSvg || (I.observeMutations = !1);
  var Y = z({}, I);
  n.FontAwesomeConfig = Y;
  var D = n || {};
  D.___FONT_AWESOME___ || (D.___FONT_AWESOME___ = {}), D.___FONT_AWESOME___.styles || (D.___FONT_AWESOME___.styles = {}), D.___FONT_AWESOME___.hooks || (D.___FONT_AWESOME___.hooks = {}), D.___FONT_AWESOME___.shims || (D.___FONT_AWESOME___.shims = []);
  var U = D.___FONT_AWESOME___,
    Q = [],
    X = !1;

  function B(c) {
    C && (X ? setTimeout(c, 0) : Q.push(c))
  }
  C && ((X = (H.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(H.readyState)) || H.addEventListener("DOMContentLoaded", function c() {
    H.removeEventListener("DOMContentLoaded", c), X = 1, Q.map(function(c) {
      return c()
    })
  }));
  var K, G = "pending",
    J = "settled",
    $ = "fulfilled",
    cc = "rejected",
    lc = function() {},
    hc = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
    zc = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
    vc = [];

  function ac() {
    for (var c = 0; c < vc.length; c++) vc[c][0](vc[c][1]);
    vc = [], K = !1
  }

  function mc(c, l) {
    vc.push([c, l]), K || (K = !0, zc(ac, 0))
  }

  function sc(c) {
    var l = c.owner,
      h = l._state,
      z = l._data,
      v = c[h],
      a = c.then;
    if ("function" == typeof v) {
      h = $;
      try {
        z = v(z)
      } catch (c) {
        fc(a, c)
      }
    }
    ec(a, z) || (h === $ && tc(a, z), h === cc && fc(a, z))
  }

  function ec(l, h) {
    var z;
    try {
      if (l === h) throw new TypeError("A promises callback cannot return that same promise.");
      if (h && ("function" == typeof h || "object" === c(h))) {
        var v = h.then;
        if ("function" == typeof v) return v.call(h, function(c) {
          z || (z = !0, h === c ? Mc(l, c) : tc(l, c))
        }, function(c) {
          z || (z = !0, fc(l, c))
        }), !0
      }
    } catch (c) {
      return z || fc(l, c), !0
    }
    return !1
  }

  function tc(c, l) {
    c !== l && ec(c, l) || Mc(c, l)
  }

  function Mc(c, l) {
    c._state === G && (c._state = J, c._data = l, mc(nc, c))
  }

  function fc(c, l) {
    c._state === G && (c._state = J, c._data = l, mc(Hc, c))
  }

  function rc(c) {
    c._then = c._then.forEach(sc)
  }

  function nc(c) {
    c._state = $, rc(c)
  }

  function Hc(c) {
    c._state = cc, rc(c), !c._handled && hc && global.process.emit("unhandledRejection", c._data, c)
  }

  function ic(c) {
    global.process.emit("rejectionHandled", c)
  }

  function oc(c) {
    if ("function" != typeof c) throw new TypeError("Promise resolver " + c + " is not a function");
    if (this instanceof oc == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    this._then = [],
      function(c, l) {
        function h(c) {
          fc(l, c)
        }
        try {
          c(function(c) {
            tc(l, c)
          }, h)
        } catch (c) {
          h(c)
        }
      }(c, this)
  }
  oc.prototype = {
    constructor: oc,
    _state: G,
    _then: null,
    _data: void 0,
    _handled: !1,
    then: function(c, l) {
      var h = {
        owner: this,
        then: new this.constructor(lc),
        fulfilled: c,
        rejected: l
      };
      return !l && !c || this._handled || (this._handled = !0, this._state === cc && hc && mc(ic, this)), this._state === $ || this._state === cc ? mc(sc, h) : this._then.push(h), h.then
    },
    catch: function(c) {
      return this.then(null, c)
    }
  }, oc.all = function(c) {
    if (!Array.isArray(c)) throw new TypeError("You must pass an array to Promise.all().");
    return new oc(function(l, h) {
      var z = [],
        v = 0;

      function a(c) {
        return v++,
          function(h) {
            z[c] = h, --v || l(z)
          }
      }
      for (var m, s = 0; s < c.length; s++)(m = c[s]) && "function" == typeof m.then ? m.then(a(s), h) : z[s] = m;
      v || l(z)
    })
  }, oc.race = function(c) {
    if (!Array.isArray(c)) throw new TypeError("You must pass an array to Promise.race().");
    return new oc(function(l, h) {
      for (var z, v = 0; v < c.length; v++)(z = c[v]) && "function" == typeof z.then ? z.then(l, h) : l(z)
    })
  }, oc.resolve = function(l) {
    return l && "object" === c(l) && l.constructor === oc ? l : new oc(function(c) {
      c(l)
    })
  }, oc.reject = function(c) {
    return new oc(function(l, h) {
      h(c)
    })
  };
  var Vc = "function" == typeof Promise ? Promise : oc,
    Cc = u,
    Lc = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: !1,
      flipY: !1
    };

  function uc(c) {
    if (c && C) {
      var l = H.createElement("style");
      l.setAttribute("type", "text/css"), l.innerHTML = c;
      for (var h = H.head.childNodes, z = null, v = h.length - 1; v > -1; v--) {
        var a = h[v],
          m = (a.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(m) > -1 && (z = a)
      }
      return H.head.insertBefore(l, z), c
    }
  }
  var dc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function pc() {
    for (var c = 12, l = ""; c-- > 0;) l += dc[62 * Math.random() | 0];
    return l
  }

  function bc(c) {
    for (var l = [], h = (c || []).length >>> 0; h--;) l[h] = c[h];
    return l
  }

  function gc(c) {
    return c.classList ? bc(c.classList) : (c.getAttribute("class") || "").split(" ").filter(function(c) {
      return c
    })
  }

  function Sc(c, l) {
    var h, z = l.split("-"),
      v = z[0],
      a = z.slice(1).join("-");
    return v !== c || "" === a || (h = a, ~W.indexOf(h)) ? null : a
  }

  function Ac(c) {
    return "".concat(c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function yc(c) {
    return Object.keys(c || {}).reduce(function(l, h) {
      return l + "".concat(h, ": ").concat(c[h], ";")
    }, "")
  }

  function wc(c) {
    return c.size !== Lc.size || c.x !== Lc.x || c.y !== Lc.y || c.rotate !== Lc.rotate || c.flipX || c.flipY
  }

  function kc(c) {
    var l = c.transform,
      h = c.containerWidth,
      z = c.iconWidth,
      v = {
        transform: "translate(".concat(h / 2, " 256)")
      },
      a = "translate(".concat(32 * l.x, ", ").concat(32 * l.y, ") "),
      m = "scale(".concat(l.size / 16 * (l.flipX ? -1 : 1), ", ").concat(l.size / 16 * (l.flipY ? -1 : 1), ") "),
      s = "rotate(".concat(l.rotate, " 0 0)");
    return {
      outer: v,
      inner: {
        transform: "".concat(a, " ").concat(m, " ").concat(s)
      },
      path: {
        transform: "translate(".concat(z / 2 * -1, " -256)")
      }
    }
  }
  var _c = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };

  function xc(c) {
    var l = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return c.attributes && (c.attributes.fill || l) && (c.attributes.fill = "black"), c
  }

  function Oc(c) {
    var l = c.icons,
      h = l.main,
      v = l.mask,
      a = c.prefix,
      m = c.iconName,
      s = c.transform,
      e = c.symbol,
      t = c.title,
      M = c.extra,
      f = c.watchable,
      r = void 0 !== f && f,
      n = v.found ? v : h,
      H = n.width,
      i = n.height,
      o = "fa-w-".concat(Math.ceil(H / i * 16)),
      V = [Y.replacementClass, m ? "".concat(Y.familyPrefix, "-").concat(m) : "", o].filter(function(c) {
        return -1 === M.classes.indexOf(c)
      }).concat(M.classes).join(" "),
      C = {
        children: [],
        attributes: z({}, M.attributes, {
          "data-prefix": a,
          "data-icon": m,
          class: V,
          role: M.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(H, " ").concat(i)
        })
      };
    r && (C.attributes[b] = ""), t && C.children.push({
      tag: "title",
      attributes: {
        id: C.attributes["aria-labelledby"] || "title-".concat(pc())
      },
      children: [t]
    });
    var L = z({}, C, {
        prefix: a,
        iconName: m,
        main: h,
        mask: v,
        transform: s,
        symbol: e,
        styles: M.styles
      }),
      u = v.found && h.found ? function(c) {
        var l, h = c.children,
          v = c.attributes,
          a = c.main,
          m = c.mask,
          s = c.transform,
          e = a.width,
          t = a.icon,
          M = m.width,
          f = m.icon,
          r = kc({
            transform: s,
            containerWidth: M,
            iconWidth: e
          }),
          n = {
            tag: "rect",
            attributes: z({}, _c, {
              fill: "white"
            })
          },
          H = t.children ? {
            children: t.children.map(xc)
          } : {},
          i = {
            tag: "g",
            attributes: z({}, r.inner),
            children: [xc(z({
              tag: t.tag,
              attributes: z({}, t.attributes, r.path)
            }, H))]
          },
          o = {
            tag: "g",
            attributes: z({}, r.outer),
            children: [i]
          },
          V = "mask-".concat(pc()),
          C = "clip-".concat(pc()),
          L = {
            tag: "mask",
            attributes: z({}, _c, {
              id: V,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse"
            }),
            children: [n, o]
          },
          u = {
            tag: "defs",
            children: [{
              tag: "clipPath",
              attributes: {
                id: C
              },
              children: (l = f, "g" === l.tag ? l.children : [l])
            }, L]
          };
        return h.push(u, {
          tag: "rect",
          attributes: z({
            fill: "currentColor",
            "clip-path": "url(#".concat(C, ")"),
            mask: "url(#".concat(V, ")")
          }, _c)
        }), {
          children: h,
          attributes: v
        }
      }(L) : function(c) {
        var l = c.children,
          h = c.attributes,
          v = c.main,
          a = c.transform,
          m = yc(c.styles);
        if (m.length > 0 && (h.style = m), wc(a)) {
          var s = kc({
            transform: a,
            containerWidth: v.width,
            iconWidth: v.width
          });
          l.push({
            tag: "g",
            attributes: z({}, s.outer),
            children: [{
              tag: "g",
              attributes: z({}, s.inner),
              children: [{
                tag: v.icon.tag,
                children: v.icon.children,
                attributes: z({}, v.icon.attributes, s.path)
              }]
            }]
          })
        } else l.push(v.icon);
        return {
          children: l,
          attributes: h
        }
      }(L),
      d = u.children,
      p = u.attributes;
    return L.children = d, L.attributes = p, e ? function(c) {
      var l = c.prefix,
        h = c.iconName,
        v = c.children,
        a = c.attributes,
        m = c.symbol;
      return [{
        tag: "svg",
        attributes: {
          style: "display: none;"
        },
        children: [{
          tag: "symbol",
          attributes: z({}, a, {
            id: !0 === m ? "".concat(l, "-").concat(Y.familyPrefix, "-").concat(h) : m
          }),
          children: v
        }]
      }]
    }(L) : function(c) {
      var l = c.children,
        h = c.main,
        v = c.mask,
        a = c.attributes,
        m = c.styles,
        s = c.transform;
      if (wc(s) && h.found && !v.found) {
        var e = {
          x: h.width / h.height / 2,
          y: .5
        };
        a.style = yc(z({}, m, {
          "transform-origin": "".concat(e.x + s.x / 16, "em ").concat(e.y + s.y / 16, "em")
        }))
      }
      return [{
        tag: "svg",
        attributes: a,
        children: l
      }]
    }(L)
  }

  function Zc(c) {
    var l = c.content,
      h = c.width,
      v = c.height,
      a = c.transform,
      m = c.title,
      s = c.extra,
      e = c.watchable,
      t = void 0 !== e && e,
      M = z({}, s.attributes, m ? {
        title: m
      } : {}, {
        class: s.classes.join(" ")
      });
    t && (M[b] = "");
    var f = z({}, s.styles);
    wc(a) && (f.transform = function(c) {
      var l = c.transform,
        h = c.width,
        z = void 0 === h ? u : h,
        v = c.height,
        a = void 0 === v ? u : v,
        m = c.startCentered,
        s = void 0 !== m && m,
        e = "";
      return e += s && L ? "translate(".concat(l.x / Cc - z / 2, "em, ").concat(l.y / Cc - a / 2, "em) ") : s ? "translate(calc(-50% + ".concat(l.x / Cc, "em), calc(-50% + ").concat(l.y / Cc, "em)) ") : "translate(".concat(l.x / Cc, "em, ").concat(l.y / Cc, "em) "), e += "scale(".concat(l.size / Cc * (l.flipX ? -1 : 1), ", ").concat(l.size / Cc * (l.flipY ? -1 : 1), ") "), e += "rotate(".concat(l.rotate, "deg) ")
    }({
      transform: a,
      startCentered: !0,
      width: h,
      height: v
    }), f["-webkit-transform"] = f.transform);
    var r = yc(f);
    r.length > 0 && (M.style = r);
    var n = [];
    return n.push({
      tag: "span",
      attributes: M,
      children: [l]
    }), m && n.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [m]
    }), n
  }
  var Ec = function() {},
    qc = Y.measurePerformance && o && o.mark && o.measure ? o : {
      mark: Ec,
      measure: Ec
    },
    jc = 'FA "5.12.0"',
    Nc = function(c) {
      qc.mark("".concat(jc, " ").concat(c, " ends")), qc.measure("".concat(jc, " ").concat(c), "".concat(jc, " ").concat(c, " begins"), "".concat(jc, " ").concat(c, " ends"))
    },
    Pc = {
      begin: function(c) {
        return qc.mark("".concat(jc, " ").concat(c, " begins")),
          function() {
            return Nc(c)
          }
      },
      end: Nc
    },
    Tc = function(c, l, h, z) {
      var v, a, m, s = Object.keys(c),
        e = s.length,
        t = void 0 !== z ? function(c, l) {
          return function(h, z, v, a) {
            return c.call(l, h, z, v, a)
          }
        }(l, z) : l;
      for (void 0 === h ? (v = 1, m = c[s[0]]) : (v = 0, m = h); v < e; v++) m = t(m, c[a = s[v]], a, c);
      return m
    };

  function Fc(c) {
    for (var l = "", h = 0; h < c.length; h++) {
      l += ("000" + c.charCodeAt(h).toString(16)).slice(-4)
    }
    return l
  }
  var Wc = U.styles,
    Rc = U.shims,
    Ic = {},
    Yc = {},
    Dc = {},
    Uc = function() {
      var c = function(c) {
        return Tc(Wc, function(l, h, z) {
          return l[z] = Tc(h, c, {}), l
        }, {})
      };
      Ic = c(function(c, l, h) {
        return l[3] && (c[l[3]] = h), c
      }), Yc = c(function(c, l, h) {
        var z = l[2];
        return c[h] = h, z.forEach(function(l) {
          c[l] = h
        }), c
      });
      var l = "far" in Wc;
      Dc = Tc(Rc, function(c, h) {
        var z = h[0],
          v = h[1],
          a = h[2];
        return "far" !== v || l || (v = "fas"), c[z] = {
          prefix: v,
          iconName: a
        }, c
      }, {})
    };

  function Qc(c, l) {
    return (Ic[c] || {})[l]
  }
  Uc();
  var Xc = U.styles,
    Bc = function() {
      return {
        prefix: null,
        iconName: null,
        rest: []
      }
    };

  function Kc(c) {
    return c.reduce(function(c, l) {
      var h = Sc(Y.familyPrefix, l);
      if (Xc[l]) c.prefix = l;
      else if (Y.autoFetchSvg && ["fas", "far", "fal", "fad", "fab", "fa"].indexOf(l) > -1) c.prefix = l;
      else if (h) {
        var z = "fa" === c.prefix ? Dc[h] || {
          prefix: null,
          iconName: null
        } : {};
        c.iconName = z.iconName || h, c.prefix = z.prefix || c.prefix
      } else l !== Y.replacementClass && 0 !== l.indexOf("fa-w-") && c.rest.push(l);
      return c
    }, Bc())
  }

  function Gc(c, l, h) {
    if (c && c[l] && c[l][h]) return {
      prefix: l,
      iconName: h,
      icon: c[l][h]
    }
  }

  function Jc(c) {
    var l = c.tag,
      h = c.attributes,
      z = void 0 === h ? {} : h,
      v = c.children,
      a = void 0 === v ? [] : v;
    return "string" == typeof c ? Ac(c) : "<".concat(l, " ").concat(function(c) {
      return Object.keys(c || {}).reduce(function(l, h) {
        return l + "".concat(h, '="').concat(Ac(c[h]), '" ')
      }, "").trim()
    }(z), ">").concat(a.map(Jc).join(""), "</").concat(l, ">")
  }
  var $c = function() {};

  function cl(c) {
    return "string" == typeof(c.getAttribute ? c.getAttribute(b) : null)
  }
  var ll = {
    replace: function(c) {
      var l = c[0],
        h = c[1].map(function(c) {
          return Jc(c)
        }).join("\n");
      if (l.parentNode && l.outerHTML) l.outerHTML = h + (Y.keepOriginalSource && "svg" !== l.tagName.toLowerCase() ? "\x3c!-- ".concat(l.outerHTML, " --\x3e") : "");
      else if (l.parentNode) {
        var z = document.createElement("span");
        l.parentNode.replaceChild(z, l), z.outerHTML = h
      }
    },
    nest: function(c) {
      var l = c[0],
        h = c[1];
      if (~gc(l).indexOf(Y.replacementClass)) return ll.replace(c);
      var z = new RegExp("".concat(Y.familyPrefix, "-.*"));
      delete h[0].attributes.style, delete h[0].attributes.id;
      var v = h[0].attributes.class.split(" ").reduce(function(c, l) {
        return l === Y.replacementClass || l.match(z) ? c.toSvg.push(l) : c.toNode.push(l), c
      }, {
        toNode: [],
        toSvg: []
      });
      h[0].attributes.class = v.toSvg.join(" ");
      var a = h.map(function(c) {
        return Jc(c)
      }).join("\n");
      l.setAttribute("class", v.toNode.join(" ")), l.setAttribute(b, ""), l.innerHTML = a
    }
  };

  function hl(c) {
    c()
  }

  function zl(c, l) {
    var h = "function" == typeof l ? l : $c;
    if (0 === c.length) h();
    else {
      var z = hl;
      Y.mutateApproach === k && (z = n.requestAnimationFrame || hl), z(function() {
        var l = !0 === Y.autoReplaceSvg ? ll.replace : ll[Y.autoReplaceSvg] || ll.replace,
          z = Pc.begin("mutate");
        c.map(l), z(), h()
      })
    }
  }
  var vl = !1;

  function al() {
    vl = !1
  }
  var ml = null;

  function sl(c) {
    if (i && Y.observeMutations) {
      var l = c.treeCallback,
        h = c.nodeCallback,
        z = c.pseudoElementsCallback,
        v = c.observeMutationsRoot,
        a = void 0 === v ? H : v;
      ml = new i(function(c) {
        vl || bc(c).forEach(function(c) {
          if ("childList" === c.type && c.addedNodes.length > 0 && !cl(c.addedNodes[0]) && (Y.searchPseudoElements && z(c.target), l(c.target)), "attributes" === c.type && c.target.parentNode && Y.searchPseudoElements && z(c.target.parentNode), "attributes" === c.type && cl(c.target) && ~T.indexOf(c.attributeName))
            if ("class" === c.attributeName) {
              var v = Kc(gc(c.target)),
                a = v.prefix,
                m = v.iconName;
              a && c.target.setAttribute("data-prefix", a), m && c.target.setAttribute("data-icon", m)
            } else h(c.target)
        })
      }), C && ml.observe(a, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      })
    }
  }

  function el(c) {
    var l, h, z = c.getAttribute("data-prefix"),
      v = c.getAttribute("data-icon"),
      a = void 0 !== c.innerText ? c.innerText.trim() : "",
      m = Kc(gc(c));
    return z && v && (m.prefix = z, m.iconName = v), m.prefix && a.length > 1 ? m.iconName = (l = m.prefix, h = c.innerText, (Yc[l] || {})[h]) : m.prefix && 1 === a.length && (m.iconName = Qc(m.prefix, Fc(c.innerText))), m
  }
  var tl = function(c) {
    var l = {
      size: 16,
      x: 0,
      y: 0,
      flipX: !1,
      flipY: !1,
      rotate: 0
    };
    return c ? c.toLowerCase().split(" ").reduce(function(c, l) {
      var h = l.toLowerCase().split("-"),
        z = h[0],
        v = h.slice(1).join("-");
      if (z && "h" === v) return c.flipX = !0, c;
      if (z && "v" === v) return c.flipY = !0, c;
      if (v = parseFloat(v), isNaN(v)) return c;
      switch (z) {
        case "grow":
          c.size = c.size + v;
          break;
        case "shrink":
          c.size = c.size - v;
          break;
        case "left":
          c.x = c.x - v;
          break;
        case "right":
          c.x = c.x + v;
          break;
        case "up":
          c.y = c.y - v;
          break;
        case "down":
          c.y = c.y + v;
          break;
        case "rotate":
          c.rotate = c.rotate + v
      }
      return c
    }, l) : l
  };

  function Ml(c) {
    var l = el(c),
      h = l.iconName,
      z = l.prefix,
      v = l.rest,
      a = function(c) {
        var l = c.getAttribute("style"),
          h = [];
        return l && (h = l.split(";").reduce(function(c, l) {
          var h = l.split(":"),
            z = h[0],
            v = h.slice(1);
          return z && v.length > 0 && (c[z] = v.join(":").trim()), c
        }, {})), h
      }(c),
      m = function(c) {
        return tl(c.getAttribute("data-fa-transform"))
      }(c),
      s = function(c) {
        var l = c.getAttribute("data-fa-symbol");
        return null !== l && ("" === l || l)
      }(c),
      e = function(c) {
        var l = bc(c.attributes).reduce(function(c, l) {
            return "class" !== c.name && "style" !== c.name && (c[l.name] = l.value), c
          }, {}),
          h = c.getAttribute("title");
        return Y.autoA11y && (h ? l["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(pc()) : (l["aria-hidden"] = "true", l.focusable = "false")), l
      }(c),
      t = function(c) {
        var l = c.getAttribute("data-fa-mask");
        return l ? Kc(l.split(" ").map(function(c) {
          return c.trim()
        })) : Bc()
      }(c);
    return {
      iconName: h,
      title: c.getAttribute("title"),
      prefix: z,
      transform: m,
      symbol: s,
      mask: t,
      extra: {
        classes: v,
        styles: a,
        attributes: e
      }
    }
  }

  function fl(c) {
    this.name = "MissingIcon", this.message = c || "Icon unavailable", this.stack = (new Error).stack
  }
  fl.prototype = Object.create(Error.prototype), fl.prototype.constructor = fl;
  var rl = {
      fill: "currentColor"
    },
    nl = {
      attributeType: "XML",
      repeatCount: "indefinite",
      dur: "2s"
    },
    Hl = {
      tag: "path",
      attributes: z({}, rl, {
        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
      })
    },
    il = z({}, nl, {
      attributeName: "opacity"
    }),
    ol = {
      tag: "g",
      children: [Hl, {
        tag: "circle",
        attributes: z({}, rl, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: [{
          tag: "animate",
          attributes: z({}, nl, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: z({}, il, {
            values: "1;0;1;1;0;1;"
          })
        }]
      }, {
        tag: "path",
        attributes: z({}, rl, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: [{
          tag: "animate",
          attributes: z({}, il, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }, {
        tag: "path",
        attributes: z({}, rl, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: z({}, il, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }]
    },
    Vl = U.styles;

  function Cl(c) {
    var l = c[0],
      h = c[1],
      z = v(c.slice(4), 1)[0];
    return {
      found: !0,
      width: l,
      height: h,
      icon: Array.isArray(z) ? {
        tag: "g",
        attributes: {
          class: "".concat(Y.familyPrefix, "-").concat(F.GROUP)
        },
        children: [{
          tag: "path",
          attributes: {
            class: "".concat(Y.familyPrefix, "-").concat(F.SECONDARY),
            fill: "currentColor",
            d: z[0]
          }
        }, {
          tag: "path",
          attributes: {
            class: "".concat(Y.familyPrefix, "-").concat(F.PRIMARY),
            fill: "currentColor",
            d: z[1]
          }
        }]
      } : {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: z
        }
      }
    }
  }

  function Ll(l, h) {
    return new Vc(function(z, v) {
      var a = {
        found: !1,
        width: 512,
        height: 512,
        icon: ol
      };
      if (l && h && Vl[h] && Vl[h][l]) return z(Cl(Vl[h][l]));
      "object" === c(n.FontAwesomeKitConfig) && "string" == typeof window.FontAwesomeKitConfig.token && n.FontAwesomeKitConfig.token, l && h && !Y.showMissingIcons ? v(new fl("Icon is missing for prefix ".concat(h, " with icon name ").concat(l))) : z(a)
    })
  }
  var ul = U.styles;

  function dl(c) {
    var l = Ml(c);
    return ~l.extra.classes.indexOf(E) ? function(c, l) {
      var h = l.title,
        z = l.transform,
        v = l.extra,
        a = null,
        m = null;
      if (L) {
        var s = parseInt(getComputedStyle(c).fontSize, 10),
          e = c.getBoundingClientRect();
        a = e.width / s, m = e.height / s
      }
      return Y.autoA11y && !h && (v.attributes["aria-hidden"] = "true"), Vc.resolve([c, Zc({
        content: c.innerHTML,
        width: a,
        height: m,
        transform: z,
        title: h,
        extra: v,
        watchable: !0
      })])
    }(c, l) : function(c, l) {
      var h = l.iconName,
        z = l.title,
        a = l.prefix,
        m = l.transform,
        s = l.symbol,
        e = l.mask,
        t = l.extra;
      return new Vc(function(l, M) {
        Vc.all([Ll(h, a), Ll(e.iconName, e.prefix)]).then(function(e) {
          var M = v(e, 2),
            f = M[0],
            r = M[1];
          l([c, Oc({
            icons: {
              main: f,
              mask: r
            },
            prefix: a,
            iconName: h,
            transform: m,
            symbol: s,
            mask: r,
            title: z,
            extra: t,
            watchable: !0
          })])
        })
      })
    }(c, l)
  }

  function pl(c) {
    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (C) {
      var h = H.documentElement.classList,
        z = function(c) {
          return h.add("".concat(w, "-").concat(c))
        },
        v = function(c) {
          return h.remove("".concat(w, "-").concat(c))
        },
        a = Y.autoFetchSvg ? Object.keys(O) : Object.keys(ul),
        m = [".".concat(E, ":not([").concat(b, "])")].concat(a.map(function(c) {
          return ".".concat(c, ":not([").concat(b, "])")
        })).join(", ");
      if (0 !== m.length) {
        var s = [];
        try {
          s = bc(c.querySelectorAll(m))
        } catch (c) {}
        if (s.length > 0) {
          z("pending"), v("complete");
          var e = Pc.begin("onTree"),
            t = s.reduce(function(c, l) {
              try {
                var h = dl(l);
                h && c.push(h)
              } catch (c) {
                x || c instanceof fl && console.error(c)
              }
              return c
            }, []);
          return new Vc(function(c, h) {
            Vc.all(t).then(function(h) {
              zl(h, function() {
                z("active"), z("complete"), v("pending"), "function" == typeof l && l(), e(), c()
              })
            }).catch(function() {
              e(), h()
            })
          })
        }
      }
    }
  }

  function bl(c) {
    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    dl(c).then(function(c) {
      c && zl([c], l)
    })
  }

  function gl(c, l) {
    var h = "".concat(S).concat(l.replace(":", "-"));
    return new Vc(function(v, a) {
      if (null !== c.getAttribute(h)) return v();
      var m = bc(c.children).filter(function(c) {
          return c.getAttribute(g) === l
        })[0],
        s = n.getComputedStyle(c, l),
        e = s.getPropertyValue("font-family").match(q),
        t = s.getPropertyValue("font-weight");
      if (m && !e) return c.removeChild(m), v();
      if (e) {
        var M = s.getPropertyValue("content"),
          f = ~["Solid", "Regular", "Light", "Duotone", "Brands"].indexOf(e[1]) ? Z[e[1].toLowerCase()] : j[t],
          r = Fc(3 === M.length ? M.substr(1, 1) : M),
          i = Qc(f, r),
          o = i;
        if (!i || m && m.getAttribute(A) === f && m.getAttribute(y) === o) v();
        else {
          c.setAttribute(h, o), m && c.removeChild(m);
          var V = {
              iconName: null,
              title: null,
              prefix: null,
              transform: Lc,
              symbol: !1,
              mask: null,
              extra: {
                classes: [],
                styles: {},
                attributes: {}
              }
            },
            C = V.extra;
          C.attributes[g] = l, Ll(i, f).then(function(a) {
            var m = Oc(z({}, V, {
                icons: {
                  main: a,
                  mask: Bc()
                },
                prefix: f,
                iconName: o,
                extra: C,
                watchable: !0
              })),
              s = H.createElement("svg");
            ":before" === l ? c.insertBefore(s, c.firstChild) : c.appendChild(s), s.outerHTML = m.map(function(c) {
              return Jc(c)
            }).join("\n"), c.removeAttribute(h), v()
          }).catch(a)
        }
      } else v()
    })
  }

  function Sl(c) {
    return Vc.all([gl(c, ":before"), gl(c, ":after")])
  }

  function Al(c) {
    return !(c.parentNode === document.head || ~_.indexOf(c.tagName.toUpperCase()) || c.getAttribute(g) || c.parentNode && "svg" === c.parentNode.tagName)
  }

  function yl(c) {
    if (C) return new Vc(function(l, h) {
      var z = bc(c.querySelectorAll("*")).filter(Al).map(Sl),
        v = Pc.begin("searchPseudoElements");
      vl = !0, Vc.all(z).then(function() {
        v(), al(), l()
      }).catch(function() {
        v(), al(), h()
      })
    })
  }
  var wl = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

  function kl() {
    var c = d,
      l = p,
      h = Y.familyPrefix,
      z = Y.replacementClass,
      v = wl;
    if (h !== c || z !== l) {
      var a = new RegExp("\\.".concat(c, "\\-"), "g"),
        m = new RegExp("\\--".concat(c, "\\-"), "g"),
        s = new RegExp("\\.".concat(l), "g");
      v = v.replace(a, ".".concat(h, "-")).replace(m, "--".concat(h, "-")).replace(s, ".".concat(z))
    }
    return v
  }

  function _l() {
    Y.autoAddCss && !ql && (uc(kl()), ql = !0)
  }

  function xl(c, l) {
    return Object.defineProperty(c, "abstract", {
      get: l
    }), Object.defineProperty(c, "html", {
      get: function() {
        return c.abstract.map(function(c) {
          return Jc(c)
        })
      }
    }), Object.defineProperty(c, "node", {
      get: function() {
        if (C) {
          var l = H.createElement("div");
          return l.innerHTML = c.html, l.children
        }
      }
    }), c
  }

  function Ol(c) {
    var l = c.prefix,
      h = void 0 === l ? "fa" : l,
      z = c.iconName;
    if (z) return Gc(El.definitions, h, z) || Gc(U.styles, h, z)
  }
  var Zl, El = new(function() {
      function c() {
        ! function(c, l) {
          if (!(c instanceof l)) throw new TypeError("Cannot call a class as a function")
        }(this, c), this.definitions = {}
      }
      var h, v, a;
      return h = c, (v = [{
        key: "add",
        value: function() {
          for (var c = this, l = arguments.length, h = new Array(l), v = 0; v < l; v++) h[v] = arguments[v];
          var a = h.reduce(this._pullDefinitions, {});
          Object.keys(a).forEach(function(l) {
            c.definitions[l] = z({}, c.definitions[l] || {}, a[l]),
              function c(l, h) {
                var v = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                  a = void 0 !== v && v,
                  m = Object.keys(h).reduce(function(c, l) {
                    var z = h[l];
                    return z.icon ? c[z.iconName] = z.icon : c[l] = z, c
                  }, {});
                "function" != typeof U.hooks.addPack || a ? U.styles[l] = z({}, U.styles[l] || {}, m) : U.hooks.addPack(l, m), "fas" === l && c("fa", h)
              }(l, a[l]), Uc()
          })
        }
      }, {
        key: "reset",
        value: function() {
          this.definitions = {}
        }
      }, {
        key: "_pullDefinitions",
        value: function(c, l) {
          var h = l.prefix && l.iconName && l.icon ? {
            0: l
          } : l;
          return Object.keys(h).map(function(l) {
            var z = h[l],
              v = z.prefix,
              a = z.iconName,
              m = z.icon;
            c[v] || (c[v] = {}), c[v][a] = m
          }), c
        }
      }]) && l(h.prototype, v), a && l(h, a), c
    }()),
    ql = !1,
    jl = {
      i2svg: function() {
        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (C) {
          _l();
          var l = c.node,
            h = void 0 === l ? H : l,
            z = c.callback,
            v = void 0 === z ? function() {} : z;
          return Y.searchPseudoElements && yl(h), pl(h, v)
        }
        return Vc.reject("Operation requires a DOM of some kind.")
      },
      css: kl,
      insertCss: function() {
        ql || (uc(kl()), ql = !0)
      },
      watch: function() {
        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          l = c.autoReplaceSvgRoot,
          h = c.observeMutationsRoot;
        !1 === Y.autoReplaceSvg && (Y.autoReplaceSvg = !0), Y.observeMutations = !0, B(function() {
          Tl({
            autoReplaceSvgRoot: l
          }), sl({
            treeCallback: pl,
            nodeCallback: bl,
            pseudoElementsCallback: yl,
            observeMutationsRoot: h
          })
        })
      }
    },
    Nl = (Zl = function(c) {
      var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        h = l.transform,
        v = void 0 === h ? Lc : h,
        a = l.symbol,
        m = void 0 !== a && a,
        s = l.mask,
        e = void 0 === s ? null : s,
        t = l.title,
        M = void 0 === t ? null : t,
        f = l.classes,
        r = void 0 === f ? [] : f,
        n = l.attributes,
        H = void 0 === n ? {} : n,
        i = l.styles,
        o = void 0 === i ? {} : i;
      if (c) {
        var V = c.prefix,
          C = c.iconName,
          L = c.icon;
        return xl(z({
          type: "icon"
        }, c), function() {
          return _l(), Y.autoA11y && (M ? H["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(pc()) : (H["aria-hidden"] = "true", H.focusable = "false")), Oc({
            icons: {
              main: Cl(L),
              mask: e ? Cl(e.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
              }
            },
            prefix: V,
            iconName: C,
            transform: z({}, Lc, v),
            symbol: m,
            title: M,
            extra: {
              attributes: H,
              styles: o,
              classes: r
            }
          })
        })
      }
    }, function(c) {
      var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        h = (c || {}).icon ? c : Ol(c || {}),
        v = l.mask;
      return v && (v = (v || {}).icon ? v : Ol(v || {})), Zl(h, z({}, l, {
        mask: v
      }))
    }),
    Pl = {
      noAuto: function() {
        Y.autoReplaceSvg = !1, Y.observeMutations = !1, ml && ml.disconnect()
      },
      config: Y,
      dom: jl,
      library: El,
      parse: {
        transform: function(c) {
          return tl(c)
        }
      },
      findIconDefinition: Ol,
      icon: Nl,
      text: function(c) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          h = l.transform,
          v = void 0 === h ? Lc : h,
          m = l.title,
          s = void 0 === m ? null : m,
          e = l.classes,
          t = void 0 === e ? [] : e,
          M = l.attributes,
          f = void 0 === M ? {} : M,
          r = l.styles,
          n = void 0 === r ? {} : r;
        return xl({
          type: "text",
          content: c
        }, function() {
          return _l(), Zc({
            content: c,
            transform: z({}, Lc, v),
            title: s,
            extra: {
              attributes: f,
              styles: n,
              classes: ["".concat(Y.familyPrefix, "-layers-text")].concat(a(t))
            }
          })
        })
      },
      counter: function(c) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          h = l.title,
          v = void 0 === h ? null : h,
          m = l.classes,
          s = void 0 === m ? [] : m,
          e = l.attributes,
          t = void 0 === e ? {} : e,
          M = l.styles,
          f = void 0 === M ? {} : M;
        return xl({
          type: "counter",
          content: c
        }, function() {
          return _l(),
            function(c) {
              var l = c.content,
                h = c.title,
                v = c.extra,
                a = z({}, v.attributes, h ? {
                  title: h
                } : {}, {
                  class: v.classes.join(" ")
                }),
                m = yc(v.styles);
              m.length > 0 && (a.style = m);
              var s = [];
              return s.push({
                tag: "span",
                attributes: a,
                children: [l]
              }), h && s.push({
                tag: "span",
                attributes: {
                  class: "sr-only"
                },
                children: [h]
              }), s
            }({
              content: c.toString(),
              title: v,
              extra: {
                attributes: t,
                styles: f,
                classes: ["".concat(Y.familyPrefix, "-layers-counter")].concat(a(s))
              }
            })
        })
      },
      layer: function(c) {
        var l = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).classes,
          h = void 0 === l ? [] : l;
        return xl({
          type: "layer"
        }, function() {
          _l();
          var l = [];
          return c(function(c) {
            Array.isArray(c) ? c.map(function(c) {
              l = l.concat(c.abstract)
            }) : l = l.concat(c.abstract)
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Y.familyPrefix, "-layers")].concat(a(h)).join(" ")
            },
            children: l
          }]
        })
      },
      toHtml: Jc
    },
    Tl = function() {
      var c = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
        l = void 0 === c ? H : c;
      (Object.keys(U.styles).length > 0 || Y.autoFetchSvg) && C && Y.autoReplaceSvg && Pl.dom.i2svg({
        node: l
      })
    };
  ! function(c) {
    try {
      c()
    } catch (c) {
      if (!x) throw c
    }
  }(function() {
    V && (n.FontAwesome || (n.FontAwesome = Pl), B(function() {
      Tl(), sl({
        treeCallback: pl,
        nodeCallback: bl,
        pseudoElementsCallback: yl
      })
    })), U.hooks = z({}, U.hooks, {
      addPack: function(c, l) {
        U.styles[c] = z({}, U.styles[c] || {}, l), Uc(), Tl()
      },
      addShims: function(c) {
        var l;
        (l = U.shims).push.apply(l, a(c)), Uc(), Tl()
      }
    })
  })
}();