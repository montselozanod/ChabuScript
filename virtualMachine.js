var MemOffset = {
  NUMBER: 1000;
  STRING: 5000,
  BOOL: 8000,
  TMPNUM: 10000,
  TMPBOOL: 20000,
  CONST: 45000
};

var memories = [];

var activeMemory = {
  numbers: [],
  bools: [],
  strings: [],
  tempNums: [],
  tempBools: [],
};

function writeToMemIndex(element, index, temp)
{
  var offsetType = getOffset(index);
  var offset = offsetType[0];
  var type = offsetType[1];
  switch(type)
  {
    case Type.NUMBER:
        if(temp)
        {
          activeMemory.tempNums[index-offset] = element;
        }
        else
        {
          activeMemory.numbers[index-offset] = element;
        }
      break;
    case Type.BOOL:
        if(temp)
        {
          activeMemory.tempBools[index-offset] = element;
        }
        else
        {
          activeMemory.bools[index-offset] = element;
        }
      break;
    case Type.STRING:
      activeMemory.strings[index-offset] = element;
      break;
  }
}

function readMemIndex(index, temp)
{
  var offsetType = getOffset(index);
  var offset = offsetType[0];
  var type = offsetType[1];
  var value;
  switch(type)
  {
    case Type.NUMBER:
        if(temp)
        {
          value = activeMemory.tempNums[index-offset];
        }
        else
        {
          value = activeMemory.numbers[index-offset];
        }
      break;
    case Type.BOOL:
        if(temp)
        {
          value = activeMemory.tempBools[index-offset];
        }
        else
        {
          value = activeMemory.bools[index-offset];
        }
      break;
    case Type.STRING:
      value = activeMemory.strings[index-offset];
      break;
  }
  return value;
}

function getOffset(index)
{
  var offset
  // number
  if(index)
  {
    return [MemOffset.CONST, Type.NUMBER];

  }else if (index)
  {
    //bool
    return [MemOffset.CONST, Type.BOOL];
  }else if(index){
    // string
    return [MemOffset.CONST, Type.STRING];
  }else if(index)
  {
    //number temp
    return [MemOffset.CONST, Type.NUMBER];

  }else if(index)
  {
    //bool temp
    return [MemOffset.CONST, Type.BOOL];

  }else if(index >= MemOffset.CONST)
  { //if index is of constant
    return [MemOffset.CONST, Type.CONST];
  }


}

function executeQuadruple(quadruple)
{
  switch(quadruple[0])
  {
    case Operation.MULT:
      var result = quadruple[1] * quadruple[2];

      break;
    case Operation.DIV:
      break;
    case Operation.SUM:
      break;
    case Operation.MINUS:
        break;
    case Operation.AND:
        break;
    case Operation.OR:
        break;
    case Operation.OR:
        break;
    case Operation.NOT:
        break;
    case Operation.LESS:
        break;
    case Operation.GRT:
        break;
    case Operation.EQL:
        break;
    case Operation.DIFF:
        break;
    case Operation.ASSIGN:
        break;
    case Operation.RND:
        break;
  }
}

function runQuadruples()
{

}
