const doc = document;

const countDown = (id, limitDate, finalMessage) => {
  const countdown = document.getElementById(id);
  const countdownDate = new Date(limitDate).getTime();
  let limitTime;
  let countdownTemp = setInterval(() => {
    let now = new Date().getTime();
    limitTime = countdownDate - now;
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
    countdown.innerHTML = `<div class='time'>${days}<br><br>Days</div>
    <div class='time'>${hours}<br><br>Hours</div>
    <div class='time'>${minutes}<br><br>Minutes</div>
    <div class='time'>${seconds}<br><br>Seconds</div>
            `;
    //console.log(countdownDate, now, limitTime);
  }, 1000);

  if (limitTime < 0) {
    clearInterval(countdownTemp);
    countdown.innerHTML = finalMessage;
  }
};

export default countDown;
