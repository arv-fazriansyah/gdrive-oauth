(function () {
  "use strict";

  var THEME_KEY = "theme";
  var LIGHT = "light";
  var DARK = "dark";
  var root = document.documentElement;
  var button = document.getElementById("theme-btn");
  var meta = document.querySelector('meta[name="theme-color"]');
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (error) {
      return null;
    }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (meta) {
      meta.setAttribute("content", theme === DARK ? "#212737" : "#fdfdfd");
    }
    if (button) {
      button.setAttribute(
        "aria-label",
        theme === DARK ? "Ganti ke tema terang" : "Ganti ke tema gelap"
      );
      button.setAttribute("title", button.getAttribute("aria-label"));
    }
  }

  apply(root.getAttribute("data-theme") === DARK ? DARK : LIGHT);

  if (button) {
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === DARK ? LIGHT : DARK;
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (error) {
        /* penyimpanan bisa diblokir; tema tetap berganti untuk halaman ini */
      }
      apply(next);
    });
  }

  media.addEventListener("change", function (event) {
    if (stored()) return;
    apply(event.matches ? DARK : LIGHT);
  });
})();
