const doc = document;

const darkTheme = (btn, classDark) => {
  const themeBtn = doc.querySelector(btn);
  const selectors = doc.querySelectorAll("[data-dark]");

  let sun = "☀️";
  let moon = "🌙";

  const lightMode = () => {
    selectors.forEach((element) => {
      element.classList.remove(classDark);
    });
    themeBtn.textContent = moon;
    localStorage.setItem("theme", "light");
  };
  const darkMode = () => {
    selectors.forEach((element) => {
      element.classList.add(classDark);
    });
    themeBtn.textContent = sun;
    localStorage.setItem("theme", "dark");
  };

  doc.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      if (themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  doc.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.getItem("theme") === "light") lightMode();

    if (localStorage.getItem("theme") === "dark") darkMode();
  });
};

export default darkTheme;
