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
  var params = {fill: 'rgb(' + [paintColor[0],paintColor[1],paintColor[2]].join(',') + ')', "stroke-width": pWidth };
  var path = this.paper.path(Raphael.format("M{0},{1}L{2},{3}",
      point1[0], point1[1], point2[0], point2[1])).attr(params);
  line = {};
}

function drawCircle(pWidth)
{
  var point = stackPoints.pop();
  var c = paper.circle(point[0], point[1], circle['radius']);
  c.attr({fill: 'rgb(' + [paintColor[0],paintColor[1],paintColor[2]].join(',') + ')', stroke: "None", 'stroke-width': pWidth});
  circle = {};
}

function drawRectangle(pWidth)
{
  var point = stackPoints.pop();
  var params = {fill: 'rgb(' + [paintColor[0],paintColor[1],paintColor[2]].join(',') + ')', "stroke-width": pWidth };
  var rect = paper.rect(point[0], point[1], rectangle['width'], rectangle['height']);
  rect.attr(params);
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
