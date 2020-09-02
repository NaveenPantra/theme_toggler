(function () {
  const html = document.querySelector("html");

  function initApp() {
    const currentTheme = localStorage.getItem("theme") ?? "light";
    html.dataset.theme = currentTheme;
    localStorage.setItem("theme", currentTheme);
  }
})();
