const secondDiv = document.querySelector(".seconds");
const minuteDiv = document.querySelector(".minutes");
const hourDiv = document.querySelector(".hours");

function getTime() {
  const time = new Date();

  const second = time.getSeconds();
  const secDeg = (second / 60) * 360 + 90;
  secondDiv.style.transform = `rotate(${secDeg}deg)`;

  const minute = time.getMinutes();
  const minDeg = (minute / 60) * 360 + 90;
  minuteDiv.style.transform = `rotate(${minDeg}deg)`;

  const hour = time.getHours();
  const hourDeg = (hour / 60) * 360 + 90;
  hourDiv.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(getTime, 1000);
