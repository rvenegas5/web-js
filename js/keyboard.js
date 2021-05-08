const doc = document;
let x = 0,
  y = 0;

export const shortcuts = (event) => {
  if (event.key === "a" && event.altKey) {
    alert("Alert Launched");
  }
  if (event.key === "c" && event.altKey) {
    confirm("Confirm Launched");
  }
  if (event.key === "p" && event.altKey) {
    prompt("Prompt Launched");
  }
};

export const moveBall = (event, ball, stage) => {
  const ballDoc = doc.querySelector(ball);
  const stageDoc = doc.querySelector(stage);
  const limitsBall = ballDoc.getBoundingClientRect();
  const limitStage = stageDoc.getBoundingClientRect();
  switch (event.keyCode) {
    case 37: //left
      if (limitsBall.left > limitStage.left) {
        event.preventDefault();
        x--;
      }
      break;
    case 38: // up
      if (limitsBall.top > limitStage.top) {
        event.preventDefault();
        y--;
      }
      break;
    case 39: // right
      if (limitsBall.right < limitStage.right) {
        event.preventDefault();
        x++;
      }
      break;
    case 40: // Down
      if (limitsBall.bottom < limitStage.bottom) {
        event.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }
  ballDoc.style.transform = `translate(${x * 10}px,${y * 10}px)`;
};
