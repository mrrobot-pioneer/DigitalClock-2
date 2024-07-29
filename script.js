const hoursHand = document.querySelector("#hours");
const minutesHand = document.querySelector("#minutes");
const secondsHand = document.querySelector("#seconds");

const digitalHours = document.querySelector(".digital .hours");
const digitalMinutes = document.querySelector(".digital .minutes");
const digitalSeconds = document.querySelector(".digital .seconds");
const meridianContainer = document.querySelector(".digital .am-pm");

setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hoursHand.style.transform = `rotateZ(${hours * 30 + minutes / 2}deg)`;
  minutesHand.style.transform = `rotateZ(${minutes * 6}deg)`;
  secondsHand.style.transform = `rotateZ(${seconds * 6}deg)`;

  // am or pm
  let meridian = "";
  hours >= 12 ? (meridian = "PM") : (meridian = "AM");

  // convert 24 hour to 12 hour system
  hours > 12 && (hours = hours - 12);

  // add 0 before single digit number
  minutes < 10 && (minutes = `0${minutes}`);
  seconds < 10 && (seconds = `0${seconds}`);

  digitalHours.textContent = hours;
  digitalMinutes.textContent = minutes;
  digitalSeconds.textContent = seconds;
  meridianContainer.textContent = meridian;
}, 1000);
