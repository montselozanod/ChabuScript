

//current function


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
}

function addProc(name, procedure)
{
  console.log("add " + name + " to procs directory.");
  dirProcs[name] = procedure;
}

function addLocalVar(id, type, address)
{
  varTable[id] = [type, address];
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

function addConstant(cons)
{
  if(cons in constants )
  {
    return constants[cons];
  }else{
    var address = constMem++;
    constants[address] = cons;
    constants[cons] = address;
    return address;
  }
}
