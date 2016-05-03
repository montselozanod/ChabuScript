
var TableVarAccess = {
  TYPE: 0,
  ADDRESS: 1,
  DIM: 2,
  SIZE: 3
}

var DirProcAccess = {
  TYPE: 0,
  QUADINI: 1,
  PARAMS: 2,
  NUMVARS: 3
}

var Block =  {
  COLOR: 1,
}

function getTypeStringFromEnum(type)
{
  switch(type)
  {
    case Type.NUMBER:
      return 'NUMBER';
      break;
    case Type.STRING:
      return 'STRING';
      break;
    case Type.BOOL:
      return 'BOOL';
      break;
    default:
      return 'UNKNOWN_TYPE';
      break;
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
