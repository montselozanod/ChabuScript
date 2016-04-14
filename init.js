var varTable = {};
var quadruples = [];
var dirProcs = {};
var varTable = {};
var quadCont = 0;
var constants = {};
var numVars = 0;
var stringVars = 0;
var boolVars = 0;
var errors = {
  'PARAMETER_TYPE_MISMATCH': 'Function {0} expects type {1} and received type {2} in position {3}',
  'PARAMETER_LENGTH_MISMATCH': 'Function {0} expects {1} parameters and is invoked with {2}',
  'UNDECLARED_VARIABLE': 'Undeclared variable {0} found',
  'UNDECLARED_FUNCTION': 'Undeclared function {0} found',
  'DUPLICATE_VARIABLE_NAME': 'Duplicate variable name {0} found',
  'DUPLICATE_FUNCTION_NAME': 'Duplicate function name {0} found',
};

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
