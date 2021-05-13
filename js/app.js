import hamburgerMenu from "./hamburger.js";
import countDown from "./countdown.js";
import scrollTopBtn from "./scrollBtn.js";
import darkTheme from "./dark_theme.js";
import responsiveMedia from "./object-responsive.js";
import responsiveTester from "./responsive-tester.js";
import userDeviceInfo from "./devices-detection.js";
import networkStatus from "./network_detec.js";
import webCam from "./webcam_detc.js";
import { digitalClok, alarm } from "./clock.js";
import { shortcuts, moveBall } from "./keyboard.js";

document.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClok("#clock", "#start-clock", "#end-clock");
  alarm("../assets/sound.mp3", "#start-alarm", "#end-alarm");
  countDown("countdown", "Sep 28, 2021 00:00:00", "Happy Birthday");
  scrollTopBtn(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 720px)",
    `<a href="https://www.youtube.com/embed/21qNxnCS8WU" target="_blank" 
    rel="noopener" class="mobile" data-dark>Watch Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/21qNxnCS8WU"
     title="YouTube video player" frameborder="0" allow="accelerometer; 
     autoplay; clipboard-write; encrypted-media; gyroscope;
     picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 720px)",
    `<a href="https://goo.gl/maps/qq1CJgYVYTpzXeir5" target="_blank" 
    rel="noopener" class="mobile" data-dark>See Map</a>`,
    `<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11277.233983815091!2d-79.95821457714439!3d-2.113446806826276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc0dd2a78f3c88a0!2sMall%20El%20Fortin!5e0!3m2!1sen!2sec!4v1620445261348!5m2!1sen!2sec" 
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("form-tester", "#try", "#close");
  userDeviceInfo("user-device");
  webCam("webcam");
});

document.addEventListener("keydown", (event) => {
  shortcuts(event);
  moveBall(event, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
