const networkStatus = () => {
  const isOnLine = () => {
    const divNet = document.createElement("div");

    if (navigator.onLine) {
      divNet.innerHTML = `Connection reestablished`;
      divNet.classList.add("online");
      divNet.classList.remove("offline");
    } else {
      divNet.innerHTML = `Lost Connection`;
      divNet.classList.add("offline");
      divNet.classList.remove("online");
    }

    document.body.insertAdjacentElement("afterbegin", divNet);

    setTimeout(() => {
      document.body.removeChild(divNet);
    }, 2000);
  };
  window.addEventListener("online", (e) => isOnLine());

  window.addEventListener("offline", (e) => isOnLine());
};

export default networkStatus;
