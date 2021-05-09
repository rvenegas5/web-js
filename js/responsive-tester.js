const validation = (num) => {
  if (typeof parseInt(num, 10) === "number" && num >= 100) return true;
  else false;
};

const responsiveTester = (id, tryForm, closeForm) => {
  const formElem = document.getElementById(id);
  let openedWindow = null;
  document.addEventListener("click", (e) => {
    if (e.target.matches(tryForm)) {
      e.preventDefault();
      const dataForm = new FormData(formElem);
      let url = dataForm.get("furl");
      let width = dataForm.get("width");
      let height = dataForm.get("height");
      if (validation(width) && validation(height)) {
        openedWindow = open(
          url,
          "CNN_WindowName",
          `width=${width},height=${height}`
        );

        console.log(url, width, height);
      } else {
        console.error("Error with the width and height");
      }
    }

    if (e.target.matches(closeForm)) {
      e.preventDefault();
      if (openedWindow !== null) openedWindow.close();
      else console.error("Don't have any window opened");
    }
  });
};

export default responsiveTester;
