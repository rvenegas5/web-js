const webCam = (id) => {
  const videoCam = document.getElementById(id);
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true }) // Promise
      .then((stream) => {
        videoCam.srcObject = stream;
        videoCam.play();
      })
      .catch((err) => {
        videoCam.insertAdjacentElement(
          "afterend",
          `<p><mark>${err}</mark></p>`
        );
      });
  }
};

export default webCam;
