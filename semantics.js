

//current function
var current = {
  'scope': 'global',
  'id': 'start',
  'type': 'void',
  'params':[],
};

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
  varTable = {};
  curFuncId = "";
}

function addProc(name, procedure)
{
  console.log("add " + name + " to procs directory.");
  dirProcs[name] = procedure;
}

function addLocalVar(id, type)
{
  varTable[id] = {
    'id': id,
    'type': type,
  }
}

function varIsUnique(id)
{
  //.hasOwnProperty(id)
  if(id in varTable)
    return false;
  else {
    return true;
  }
}

function varExists(id)
{
  if(code in varTable)
  {
    return true;
  }else{
    return false;
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
