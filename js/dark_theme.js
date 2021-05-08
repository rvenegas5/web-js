const doc = document;

const darkTheme = (btn, classDark) => {
  const themeBtn = doc.querySelector(btn);
  const selectors = doc.querySelectorAll("[data-dark]");
  console.log(selectors);

  let sun = "☀️";
  let moon = "🌙";

  doc.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      if (themeBtn.textContent === moon) {
        selectors.forEach((element) => {
          element.classList.add(classDark);
        });
        themeBtn.textContent = sun;
      } else {
        selectors.forEach((element) => {
          element.classList.remove(classDark);
        });
        themeBtn.textContent = moon;
      }
    }
  });
};

export default darkTheme;
