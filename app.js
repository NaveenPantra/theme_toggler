const DOMSelectors = {
  sun: ".sun_svg",
  toggleWrapper: ".toggle_wrapper",
  moon: ".svg_moon",
  html: "html",
  themeText: ".theme_text",
};

const themes = {
  dark: "dark",
  light: "light",
};

const webStorageKeys = {
  theme: "theme",
};

const appState = {
  theme: themes.light,
};

const toggleWrapper = document.querySelector(DOMSelectors.toggleWrapper);
const sunSvg = document.querySelector(DOMSelectors.sun);
const html = document.querySelector(DOMSelectors.html);
const themeText = document.querySelector(DOMSelectors.themeText);

function initApp() {
  const currentTheme =
    localStorage.getItem(webStorageKeys.theme) ?? themes.light;
  updateThemeToUI(currentTheme);
}

function updateThemeToUI(currentTheme) {
  appState.theme = currentTheme;
  html.dataset.theme = appState.theme;
  localStorage.setItem(webStorageKeys.theme, appState.theme);
  themeText.textContent = appState.theme.toUpperCase();
}

toggleWrapper.addEventListener("click", handleClick);

function setToggelingTheme() {
  const nextTheme =
    appState.theme === themes.light ? themes.dark : themes.light;
  updateThemeToUI(nextTheme);
}

function handleClick() {
  setToggelingTheme();
}

initApp();
