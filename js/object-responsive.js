const responsiveMedia = (id, medQue, mobileContent, deskContent) => {
  let breakPoint = window.matchMedia(medQue);
  const responsive = (event) => {
    if (event.matches) {
      document.getElementById(id).innerHTML = deskContent;
    } else {
      document.getElementById(id).innerHTML = mobileContent;
    }
  };
  breakPoint.addListener(responsive);
  responsive(breakPoint);
};

export default responsiveMedia;
