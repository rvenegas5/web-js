const getGeolocation = (id) => {
  const idGeo = document.getElementById(id);
  const options = {
    eneableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const successLoc = (position) => {
    let coords = position.coords;
    idGeo.innerHTML = `
      <p>Your current position is:</p>
      <ul>
        <li>Latitude: <b>${coords.latitude}</b></li>
        <li>Longitude: <b>${coords.longitude}</b></li>
        <li>Accuracy: <b>${coords.accuracy} meters</b></li>
      </ul>
      <a href="https://google.com/maps/@${coords.latitude},${coords.longitude},20z" 
      target="_blank" rel="noopener">See in Google Maps</a>
    `;
  };
  const errorLoc = (error) => {
    console.errors(error);
  };
  navigator.geolocation.getCurrentPosition(successLoc, errorLoc, options);
};

export default getGeolocation;
