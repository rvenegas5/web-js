import hamburgerMenu from "./hamburger.js";
import countDown from "./countdown.js";
import scrollTopBtn from "./scrollBtn.js";
import darkTheme from "./dark_theme.js";
import { digitalClok, alarm } from "./clock.js";
import { shortcuts, moveBall } from "./keyboard.js";

document.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClok("#clock", "#start-clock", "#end-clock");
  alarm("../assets/sound.mp3", "#start-alarm", "#end-alarm");
  countDown("countdown", "Sep 28, 2021 00:00:00", "Happy Birthday");
  scrollTopBtn(".scroll-top-btn");
});

document.addEventListener("keydown", (event) => {
  shortcuts(event);
  moveBall(event, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");