

//current function
var current = {
  'scope': 'global',
  'id': 'start',
  'type': 'void',
  'params':[],
};

return this.getToken(chabuildlyParser.ID, 0);

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
