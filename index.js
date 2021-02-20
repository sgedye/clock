const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

let seconds, minutes, hourDegrees;

(() => {
  // Create the lines delimiating the 60 marks of a clock face
  const lines = document.querySelector(".lines");
  for (let i = 0; i < 60; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `rotate(${i * 6}deg)`;
    lines.appendChild(line);
  }

  // Setting the initial time (note hours step by degrees, not units)
  const initialTime = new Date();
  const hours = initialTime.getHours() % 12;
  minutes = initialTime.getMinutes();
  seconds = initialTime.getSeconds();
  hourDegrees = hours * 30 + minutes * 0.5;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${6 * minutes}deg)`;
  secondHand.style.transform = `rotate(${6 * seconds}deg)`;

  secondHand.style.opacity = 1;
  minuteHand.style.opacity = 1;
  hourHand.style.opacity = 1;
})();

// Update the clock every 1000ms (approx.)
setInterval(() => {
  seconds++;
  secondHand.style.transform = `rotate(${6 * seconds}deg)`;

  if (seconds % 60 === 0) {
    minutes++;
    hourDegrees += 0.5;
    minuteHand.style.transform = `rotate(${6 * minutes}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
}, 1000);
