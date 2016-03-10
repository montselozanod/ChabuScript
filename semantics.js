var errors{
  'PARAMETER_TYPE_MISMATCH': 'Function {0} expects type {1} and received type {2} in position {3}',
  'PARAMETER_LENGTH_MISMATCH': 'Function {0} expects {1} parameters and is invoked with {2}',
  'UNDECLARED_VARIABLE': 'Undeclared variable {0} found',
  'UNDECLARED_FUNCTION': 'Undeclared function {0} found',
  'DUPLICATE_VARIABLE_NAME': 'Duplicate variable name {0} found',
  'DUPLICATE_FUNCTION_NAME': 'Duplicate function name {0} found',
}

//current function
var current = {
  'scope': 'global',
  'id': 'start',
  'type': 'void',
  'params':[],
};

return this.getToken(chabuildlyParser.ID, 0);


//directory of all procedures in a program
var dirProcs = {};
/*
  nombre,
  tipo,
  variable = referencia a la tabla de variables del scope
*/

/* tabla de variables
  nombre
  tipo
  var current = {
     'scope': 'local',
     'id': 'start',
     'type':'void',
     'params':[],
  };
*/

function initializeAgain()
{
  currentVarTable = {};
  curId = "";
  curType = "";
  curFuncId = "";
}

function addProc(name, procedure)
{
  console.log("add " + name + " to procs directory.");
  dirProcs[name] = procedure;
}

function addLocalVar(id, type)
{
  currentVarTable[id] = {
    'id': id,
    'type': type,
  }
  curId = "";
  curType = "";
}

function varIsUnique(id)
{
  //.hasOwnProperty(id)
  if(id in currentVarTable)
    return false;
  else {
    return true;
  }
}

function funcIsUnique(name)
{
  //.hasOwnProperty(id)
  if(name in dirProcs)
    return false;
  else {
    return true;
  }
}
