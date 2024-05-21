var currTime = new Date();

const seconds = document.getElementsByClassName("seconds")[0];
const minutes = document.getElementsByClassName("minutes")[0];
const hours = document.getElementsByClassName("hours")[0];

const changeTime = () => {
  var currTime = new Date();

  seconds.style.transform = `rotate(${currTime.getSeconds() * 6}deg)`;

  minutes.style.transform = `rotate(${
    currTime.getMinutes() * 6 + 
    currTime.getSeconds() / 10
  }deg)`;

  hours.style.transform = `rotate(${
    (currTime.getHours() % 12) * 6 +
    currTime.getMinutes() / 10 +
    currTime.getSeconds() / 100
  }deg)`;

//   console.log(
//     currTime.getSeconds() * 6,
//     currTime.getMinutes() * 6 + (currTime.getSeconds() % 60) / 10,
//     (currTime.getHours() % 12) * 6 +
//       currTime.getMinutes() / 10 +
//       currTime.getSeconds() / 100
//   );
};

setInterval(changeTime, 1000);
