
var regexNumber = /^-?\d*(\.\d+)?$/;
var regexString = /^"[^"]*"$/;
//var regexBoolean = /^(true|false)$/;
var regexBoolean = /^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/;

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

function validateListAccess(index, text_index, list_name)
{
  if(isNan(index))
  {
    var message = String.format(errors['INVALID_INDEX'], text_index, list_name);
    printToShell(message, true); //print error;
    return false;
  }else if(varIsUnique(list_name))
  {
    var message = String.format(errors['UNDECLARED_VARIABLE'], list_name);
    printToShell(message, true); //print error;
    return false;
  }else if(varTable[list_name][2] != 1)
  {
    var message = String.format(errors['INVALID_OP'], list_name);
    printToShell(message, true); //print error;
    return false;
  }else if(varTable[list_name][3] < index || index < 0)
  {
    var message = String.format(errors['INDEX_OUT_BOUNDS'], text_index, list_name);
    printToShell(message, true); //print error;
    return false;
  }else{
    return true;
  }
}

function checkInputType(input, type)
{
  var correct = false;
  var value;
  switch(type)
  {
    case Type.NUMBER:
      if(input.match(regexNumber))
        {
          value = Number(input);
          correct = true;
        }
      break;
    case Type.STRING:
      if(input.match(regexString))
        {value = input;
        correct = true;}
      break
    case Type.BOOL:
      if(input.match(regexBoolean))
        {value = input == 'true';
        correct = true;}
      break;
  }

  return [correct, value];
}
