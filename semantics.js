
var regexNumber = /^-?\d*(\.\d+)?$/; //expresión regular de number
var regexString = /^"[^"]*"$/; //expresión regular de string
//var regexBoolean = /^(true|false)$/;
var regexBoolean = /^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/;//expresión regular de boolean

// Funcion para inicializar la tabla de variables nuevamente
function initializeAgain()
{
    varTable = {};
}

//Funcion que agrega una funcion a la tabla de procedimientos a partir de
// un nombre, un tipo, un inicio, lista de params, y numero de variables
//numVars = [numS, tmpNums, strings, booleans, tmpBools ]
function addProc(name, type, quadInit, params, numVars)
{
  console.log("add " + name + " to procs directory.");
  dirProcs[name] = [type, quadInit, params, numVars];
}

//Funcion que regresa la lista de parametros de una funcion en especial
function getProcParams(name)
{
  return dirProcs[name][2];
}

//Funcion que agrega una variable local a la table de variables a partir de su nombre
// tipo, direccion, dimension y size
function addLocalVar(id, type, address, dimension, size)
{
  varTable[id] = [type, address, dimension, size];
}

//funcion que checa si una variable es unique
// TRUE if unique
// FALE IF NOT
function varIsUnique(id)
{
  //.hasOwnProperty(id)
  if(id in varTable)
    return false;
  else {
    return true;
  }
}

//funcion que checa si una funcion es unique
// TRUE if unique
// FALE IF NOT
function funcIsUnique(name)
{
  //.hasOwnProperty(id)
  if(name in dirProcs)
    return false;
  else {
    return true;
  }
}

// Funcion que agrega una constante a la estructura de constantes
// Si ya existe regresa el valor del address de la existente
// Si no existe, lo agrega y regresa su address
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

// Valida el accesso a una lista a partir del indice, nombre y indice
// Regresa true si el input es aceptable
// Regresa false e imprime el error si no se puede acceder.
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

//Verifica de acuerdo a expresiones regulares el input de acuerdo al tipo que se busca
// regresa true si el input cumple con el tipo y false si no
// La función también hace parsing del valor
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
