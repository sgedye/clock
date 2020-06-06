const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

(function createLines() {
  const clockFace = document.querySelector('.clock-face');
  for (let i = 0; i < 60; i++) {
    const line = document.createElement('div');
    line.classList.add('lines')
    line.style.transform = `rotate(${i * 6}deg)`;
    clockFace.appendChild(line)
  }
})()

function getCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours() / 12 * 360 + 90;
  const minutes = currentTime.getMinutes() / 60 * 360 + 90;
  const seconds = currentTime.getSeconds() / 60 * 360 + 90;
  hourHand.style.transform = `rotate(${hours}deg)`;
  minuteHand.style.transform = `rotate(${minutes}deg)`;
  secondHand.style.transform = `rotate(${seconds}deg)`;
}
setInterval(getCurrentTime, 1000);