var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.fill();

// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.beginPath();
// ctx.moveTo(50, 50);
// // draw your path
// ctx.fill();

ctx.beginPath();

for (i=0; i< 720; i++) {
  angle = 0.1 * i;
  x=(1+angle)*Math.cos(angle);
  y=(1+angle)*Math.sin(angle);
  context.lineTo(x, y);
}