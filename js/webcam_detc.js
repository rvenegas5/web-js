const webCam = (id) => {
  const videoCam = document.getElementById(id);
  if (navigator.mediaDevices.getUserMedia) {
    let tempP = document.createElement("p");
    navigator.mediaDevices
      .getUserMedia({ video: true }) // Promise
      .then((stream) => {
        videoCam.srcObject = stream;
        videoCam.play();
      })
      .catch((err) => {
        tempP.innerHTML = `<mark>${err}</mark>`
        videoCam.insertAdjacentElement(
          "afterend",
          tempP
        );
      });
  }
};

export default webCam;
