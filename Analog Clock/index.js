const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const time = document.querySelector(".time");

function adjustHeight() {
  var clock = document.querySelector(".clock");
  var width = clock.offsetWidth;
  clock.style.height = width + "px";
  seconds.style.borderBottom = `${width / 2}px solid red`;
  minutes.style.borderBottom = `${width / 2}px solid green`;
  hours.style.borderBottom = `${width / 2}px solid blue`;
}

window.onload = adjustHeight;
window.onresize = adjustHeight;

var currTime = new Date();

const changeTime = () => {
  var currTime = new Date();

  seconds.style.transform = `rotate(${currTime.getSeconds() * 6}deg)`;

  minutes.style.transform = `rotate(${
    currTime.getMinutes() * 6 + currTime.getSeconds() / 10
  }deg)`;

  hours.style.transform = `rotate(${
    (currTime.getHours() % 12) * 6 +
    currTime.getMinutes() / 10 +
    currTime.getSeconds() / 100
  }deg)`;

  time.textContent = currTime.getHours() + ":" + currTime.getMinutes() + ":" + currTime.getSeconds()
};

setInterval(changeTime, 1000);
