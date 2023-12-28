const numbersContainer = document.querySelector('.numbers');
const clock = document.querySelector('.clock');
const radius = clock.clientWidth / 2-20;
console.log(radius);
for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.className = 'number';
  number.textContent = i;

  const angle = (i - 3) * 30 * Math.PI / 180; 

  const numberX = Math.round(radius + radius * Math.cos(angle))-210; 
  const numberY = Math.round(radius + radius * Math.sin(angle))-95; 

  number.style.top = `${numberY}px`;
  number.style.left = `${numberX}px`;

  numbersContainer.appendChild(number);
}

// In script.js
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondhand = document.querySelector('.second-hand')
function setClock() {
  const now = new Date();
  const hours = now.getHours() % 12; 
  const minutes = now.getMinutes();
  const seconds= now.getSeconds();
  const hoursDeg = (hours * 30) + (minutes * 0.5);
  const minutesDeg = minutes * 6; 
  const secondDeg = seconds*6;

  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  secondhand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(setClock, 1000);

