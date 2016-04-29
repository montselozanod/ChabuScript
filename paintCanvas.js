var canvas = document.getElementById('canvas');
var paintColor = [];
var paper; //canvas to paint
function initCanvas()
{
  paper = Raphael("canvas", 500, 500);
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

function drawLine(point1, point2)
{

}

function drawCircle(radius, point)
{

}

function drawRectangle(width, height)
{

}

function drawPolygon(points)
{

}

function generateRandom(min, max)
{
  return Math.random() * (max - min) + min;
}
