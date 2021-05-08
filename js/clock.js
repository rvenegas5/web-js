const doc = document;

export const digitalClok = (clock, playBtn, stopBtn) => {
  let clockTime;
  doc.addEventListener("click", (event) => {
    if (event.target.matches(playBtn)) {
      clockTime = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        doc.querySelector(
          clock
        ).innerHTML = `<h3 style="font-family: 'Orbitron', sans-serif;
        font-size:46px;">${clockHour}</h3>`;
      }, 1000);
      event.target.disabled = true;
    }
    if (event.target.matches(stopBtn)) {
      clearInterval(clockTime);
      doc.querySelector(clock).innerHTML = null;
      doc.querySelector(playBtn).disabled = false;
    }
  });
};

export const alarm = (sound, playBtn, stopBtn) => {
  let alarmTemp;
  const alarm = doc.createElement("audio");
  alarm.src = sound;
  doc.addEventListener("click", (event) => {
    if (event.target.matches(playBtn)) {
      alarmTemp = setTimeout(() => {
        alarm.play();
      }, 2000);
      event.target.disabled = true;
    }

    if (event.target.matches(stopBtn)) {
      clearTimeout(alarmTemp);
      alarm.pause(); // pause sound
      alarm.currentTime = 0; // return to 0s
      doc.querySelector(playBtn).disabled = false;
    }
  });
};
