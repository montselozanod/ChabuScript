var varTable = {};
// var name : [type, address]
var quadruples = [];
var dirProcs = {};
var varTable = {};
var quadCont = 0;
var constants = {};
var numVars = 0;
var stringVars = 0;
var boolVars = 0;
var numberMem = 1000;
var stringMem = 5000;
var boolMem = 8000;
var tmpNumMem = 10000;
var tmpBoolMem = 20000;
var constMem = 45000;

var errors = {
  'PARAMETER_TYPE_MISMATCH': 'Function {0} expects type {1} and received type {2} in position {3}',
  'PARAMETER_LENGTH_MISMATCH': 'Function {0} expects {1} parameters and is invoked with {2}',
  'UNDECLARED_VARIABLE': 'Undeclared variable {0} found',
  'UNDECLARED_FUNCTION': 'Undeclared function {0} found',
  'DUPLICATE_VARIABLE_NAME': 'Duplicate variable name {0} found',
  'DUPLICATE_FUNCTION_NAME': 'Duplicate function name {0} found',
};

function startRun()
{
  cleanShell();
  initializeAgain();
  initCanvas();
  cleanCanvas();
}

function cleanShell()
{
  var shell = document.getElementById('output');
  shell.innerHTML = '';
}

function printToShell(text, error)
{
    var shell = document.getElementById('output');
    var element = document.createElement('li');
    element.textContent = text;

    //if message to print is an error
    if (error)
    {
      element.className += " error";
    }

    shell.appendChild(element);
}

if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
