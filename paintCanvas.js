var canvas;
var paintColor = [];
var paper; //canvas to paint
function initCanvas()
{
  paper = Raphael("canvas", 500, 500);
  canvas = document.getElementById('canvas');
  canvas.style.backgroundColor = "white";
}

function generateColor(red, green, blue)
{
  paintColor[0] = red;
  paintColor[1] = green;
  paintColor[2] = blue;
}

function cleanCanvas()
{
  canvas.style.backgroundColor = "white";
}

function setBackground()
{
  canvas.style.backgroundColor = 'rgb(' + [paintColor[0],paintColor[1],paintColor[2]].join(',') + ')';
}

function drawLine(pWidth)
{
  var point2 = stackPoints.pop();
  var point1 = stackPoints.pop();

  line = {};
}

function drawCircle(pWidth)
{
  var point = stackPoints.pop();
  var c = paper.circle(point[0], point[1], circle['radius']);
  c.attr({fill: 'rgb(' + [paintColor[0],paintColor[1],paintColor[2]].join(',') + ')', stroke: "None"});
  circle = {};
}

function drawRectangle(pWidth)
{
  rectangle = {};
}

function drawPolygon(pWidth)
{
  polygon = {};
}

function generateRandom(min, max)
{
  return Math.random() * (max - min) + min;
}
