
//current function
var current = {
  'scope': 'global',
  'id': 'start',
  'params':[],
};

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
*/
//global variables
var globalVars = {};

//local variables of current scope
var localVars ={};


function addProc(name, procedure)
{
  console.log("add " + name + " to procs directory.");
  dirProcs[name] = procedure;
}

function addLocalVar(id, type)
{
  localVars[id] = {
    'id': id,
    'type': type,
  }
}

function addGlobalVar(id, type)
{
  globalVars[id] = {
    'id': id,
    'type': type,
  }
}
