
var regexNumber = /^-?\d*(\.\d+)?$/;
var regexString = /^"[^"]*"$/;
var regexBoolean = /^(true|false)$/;

function initializeAgain()
{
    varTable = {};
}

//numVars = [numS, tmpNums, strings, booleans, tmpBools ]
function addProc(name, type, quadInit, params, numVars)
{
  console.log("add " + name + " to procs directory.");
  dirProcs[name] = [type, quadInit, params, numVars];
}

function getProcParams(name)
{
  return dirProcs[name][2];
}

function addLocalVar(id, type, address, dimension, size)
{
  varTable[id] = [type, address, dimension, size];
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

//constants[constant] = [address, type]
//constants[address] = [constant]
function addConstant(cons, type)
{
  if(cons in constants )
  { //return address
    return constants[cons][0];
  }else{
    var address = constMem++;
    constants[address] = cons;
    constants[cons] = [address, type];
    return address;
  }
}
