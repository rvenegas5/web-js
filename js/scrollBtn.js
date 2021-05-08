const doc = document;
const win = window;

const scrollTopBtn = (btn) => {
  const scrollBtn = document.querySelector(btn);

  win.addEventListener("scroll", (event) => {
    let scrollTop = win.pageYOffset || doc.documentElement.scrollTop;

    if (scrollTop > 600) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  doc.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      win.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
};

export default scrollTopBtn;
