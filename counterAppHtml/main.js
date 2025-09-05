console.log(document.querySelectorAll('*'))

const counter = document.getElementById('counter');
const button = document.getElementById('button');

let clicks = 0;

button.addEventListener('click', () => {
  clicks++;
  counter.textContent = clicks;
});
