var varTable = {}; //variable table
// var name : [type, address]
var quadruples = []; // all quadruples [op, opIzq, opDer, result]
var dirProcs = {}; //process address directory
// funcName : [type, quadInicio, params, numVars]
var quadCont = 0;
var constants = {}; // constants with there memory address
var numVars = 0;
var stringVars = 0;
var boolVars = 0;
var numberMem; // start memory address for numbers
var stringMem; // start memory address for strings
var boolMem; // start memory address for bools
var tmpNumMem; // start memory address for tmp numbers
var tmpBoolMem; // start memory address for tmp bools
var constMem; // start memory address for constants
var paramNumber = 0;

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
  initCompSyntaxTools();
  initMemVars();
  cleanShell();
  initializeAgain();
  initCanvas();
  cleanCanvas();
}

function initCompSyntaxTools()
{
  quadruples = [];
  dirProcs = {};
}

function initMemVars()
{
  paramNumber = 0;
  numberMem = 1000;
  stringMem = 5000;
  boolMem = 8000;
  tmpNumMem = 10000;
  tmpBoolMem = 20000;
  constMem = 45000;
  constants = {};
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

    if (error)
    {
      element.className += " error";
    }

    shell.appendChild(element);
}

// Function to print with format messages in the shell
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
