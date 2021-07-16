import { helloWorld } from './hello-world.js';

helloWorld();

import confetti from 'canvas-confetti';

var i = 1;
let id = setInterval(function () {
  document.getElementById('demo').innerHTML = `${i} of 6 confetti's`;
  i++;
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })
  ({ particleCount: 200, spread: 200 });
}, 5000);

setTimeout(function(){
  document.getElementById('demo').innerHTML ="confetti's done!";
  clearTimeout(id);
}, 34000);