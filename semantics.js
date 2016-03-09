
//current function
var current = {
  'scope': 'global',
  'id': 'start',
  'params':[],
};

//directory of all procedures in a program
var dirProcs = {};

//global variables
var globalVars = {};

//local variables of current scope
var localVars ={};


function addProc(name, procedure)
{
  console.log("add " + name + " to procs directory.");
  dirProcs[name] = procedure;
}
