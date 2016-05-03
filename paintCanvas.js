var canvas = document.getElementById('canvas');
var width = canvas.offsetWidth - 30;
var height = canvas.offsetHeight - 30;
var paintColor = [];
var paper = Raphael("canvas", width, height); //canvas to paint
var animObj = {};
function initCanvas()
{


  canvas.style.backgroundColor = "white";
  paper.clear();
}

function generateColor(red, green, blue)
{
  paintColor[0] = red;
  paintColor[1] = green;
  paintColor[2] = blue;
}

function generateAnim(type, size)
{
  animObj['type'] = type;
  animObj['size'] = size;
  animObj['red'] = paintColor[0];
  animObj['green'] = paintColor[1];
  animObj['blue'] = paintColor[2];
}

function cleanCanvas()
{
  paper.clear();
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

  if(Object.keys(animObj).length > 0)
  {
      var _transformedPath = Raphael.transformPath(Raphael.format('M{0},{1}L{2},{3}',point2[0], point2[1],animObj['size'], animObj['size']), 'T400,0');
      path.animate({path: _transformedPath, fill: 'rgb(' + [animObj['red'],animObj['green'],animObj['blue']].join(',') + ')'}, 1000);
      animObj = {};
  }
  line = {};
}

function drawCircle(pWidth)
{
  var point = stackPoints.pop();
  var c = paper.circle(point[0], point[1], circle['radius']);
  c.attr({fill: 'rgb(' + [paintColor[0],paintColor[1],paintColor[2]].join(',') + ')', stroke: "None", 'stroke-width': pWidth});

  if(Object.keys(animObj).length > 0)
  {
      //there is an animation
      var anim = Raphael.animation({r:animObj['size'], fill: 'rgb(' + [animObj['red'],animObj['green'],animObj['blue']].join(',') + ')'}, 1000, animObj['type']);
      c.animate(anim.repeat(Infinity));
      animObj = {};
  }
  circle = {};
}

function drawRectangle(pWidth)
{
  var point = stackPoints.pop();
  var params = {fill: 'rgb(' + [paintColor[0],paintColor[1],paintColor[2]].join(',') + ')', "stroke-width": pWidth };
  var rect = paper.rect(point[0], point[1], rectangle['width'], rectangle['height']);
  rect.attr(params);

  if(Object.keys(animObj).length > 0)
  {
      //there is an animation
      var anim = Raphael.animation({width:animObj['size'], height:animObj['size'], fill: 'rgb(' + [animObj['red'],animObj['green'],animObj['blue']].join(',') + ')'}, 1000, animObj['type']);
      rect.animate(anim.repeat(Infinity));
      animObj = {};
  }
  rectangle = {};
}

function drawPolygon(pWidth)
{
  var point = stackPoints.pop();

  var pol = paper.path(drawPol(point[0], point[1], polygon['sides'], polygon['length']));
  pol.attr({fill: 'rgb(' + [paintColor[0],paintColor[1],paintColor[2]].join(',') + ')', stroke: "None", 'stroke-width': pWidth});

  if(Object.keys(animObj).length > 0)
  {
    var _transformedPath = Raphael.transformPath('M100 100L190 190', 'T400,0');
    pol.animate({path: _transformedPath, fill: 'rgb(' + [animObj['red'],animObj['green'],animObj['blue']].join(',') + ')'}, 1000);
    animObj = {};
  }
  polygon = {};
}

function generateRandom(min, max)
{
  return Math.random() * (max - min) + min;
}

function drawPol(xCor, yCor, N, side) {
    // draw a dot at the center point for visual reference
    paper.circle(xCor, yCor, 3).attr("fill", "black");

    var path = "", n, temp_x, temp_y, angle;

    for (n = 0; n <= N; n += 1) {
        // the angle (in radians) as an nth fraction of the whole circle
        angle = n / N * 2 * Math.PI;

        // The starting x value of the point adjusted by the angle
        temp_x = xCor + Math.cos(angle) * side;
        // The starting y value of the point adjusted by the angle
        temp_y = yCor + Math.sin(angle) * side;

        // Start with "M" if it's the first point, otherwise L
        path += (n === 0 ? "M" : "L") + temp_x + "," + temp_y;
    }
    return path;
}
