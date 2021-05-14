const searchFilters = (input, selector) => {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      document
        .querySelectorAll(selector)
        .forEach((element) =>
          element.textContent.toLowerCase().includes(e.target.value)
            ? element.classList.remove("filter")
            : element.classList.add("filter")
        );
    }
  });
};

export default searchFilters;
