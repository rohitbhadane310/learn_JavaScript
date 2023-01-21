
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let show = document.getElementById('show');

const d = new Date();
let hours = d.getHours();

show.innerHTML = hours;
console.log(show.innerHTML);