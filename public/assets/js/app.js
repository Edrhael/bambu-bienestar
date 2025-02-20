console.log("Hello Bambú!");
const themeToggleButton = document.querySelector('[ui-data-id="theme-toggle-btn"]');
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.add(prefersDark ? "dark-theme" : "light-theme");
}
themeToggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light-theme");
  } else {
    document.body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark-theme");
  }
});
//# sourceMappingURL=app.js.map
