//Operation Types
var Type = {
  NUMBER: 1,
  STRING: 2,
  BOOL : 3,
  CONST : 4
};

var Operation = {
  MULT: 1,
  DIV: 2,
  SUM: 3,
  MINUS: 4,
  AND: 5,
  OR: 6,
  NOT: 7,
  LESS: 8,
  GRT: 9,
  EQL: 10,
  DIFF: 11,
  ASSIGN: 12,
  PRINT: 13,
  RTRN: 14,
  RND: 15,
  BCK: 16,
  GOTOF: 17,
  GOTOT: 18,
  GOTO: 19,
  ERR: -1,
};

function checkType(type1, type2, op)
{
  if(type1 < type2)
  {
    return semanticCube[type1][type2][op];
  }
  else {
    return semanticCube[type2][type1][op];
  }
}

// Operations
var semanticCube = [];
semanticCube[Type.NUMBER] = [];
semanticCube[Type.STRING] = [];
semanticCube[Type.BOOL] = [];

semanticCube[Type.NUMBER][Type.NUMBER] = [];
semanticCube[Type.NUMBER][Type.STRING] = [];
semanticCube[Type.NUMBER][Type.BOOL] = [];

semanticCube[Type.STRING][Type.NUMBER] = [];
semanticCube[Type.STRING][Type.STRING] = [];
semanticCube[Type.STRING][Type.BOOL] = [];

semanticCube[Type.BOOL][Type.NUMBER] = [];
semanticCube[Type.BOOL][Type.STRING] = [];
semanticCube[Type.BOOL][Type.BOOL] = [];

//INITIALIZE SEMANTIC CUBE

semanticCube[Type.NUMBER][Type.NUMBER][Operation.MULT] = Type.NUMBER;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.DIV] =  Type.NUMBER;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.SUM] =  Type.NUMBER;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.MINUS] = Type.NUMBER;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.AND] = Type.BOOL;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.OR] = Type.BOOL;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.NOT] = Type.BOOL;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.LESS] = Type.BOOL;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.GRT] = Type.BOOL;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.EQL] = Type.BOOL;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.DIFF] = Type.BOOL;
semanticCube[Type.NUMBER][Type.NUMBER][Operation.ASSIGN] = Type.NUMBER;

semanticCube[Type.NUMBER][Type.STRING][Operation.MULT] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.DIV] =  Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.SUM] =  Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.MINUS] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.AND] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.OR] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.NOT] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.LESS] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.GRT] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.EQL] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.DIFF] = Type.ERR;
semanticCube[Type.NUMBER][Type.STRING][Operation.ASSIGN] = Type.ERR;

semanticCube[Type.NUMBER][Type.BOOL][Operation.MULT] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.DIV] =  Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.SUM] =  Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.MINUS] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.AND] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.OR] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.NOT] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.LESS] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.GRT] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.EQL] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.DIFF] = Type.ERR;
semanticCube[Type.NUMBER][Type.BOOL][Operation.ASSIGN] = Type.ERR;

// STRING OPS
semanticCube[Type.STRING][Type.STRING][Operation.MULT] = Type.ERR;
semanticCube[Type.STRING][Type.STRING][Operation.DIV] =  Type.ERR;
semanticCube[Type.STRING][Type.STRING][Operation.SUM] =  Type.STRING;
semanticCube[Type.STRING][Type.STRING][Operation.MINUS] = Type.ERR;
semanticCube[Type.STRING][Type.STRING][Operation.AND] = Type.ERR;
semanticCube[Type.STRING][Type.STRING][Operation.OR] = Type.ERR;
semanticCube[Type.STRING][Type.STRING][Operation.NOT] = Type.ERR;
semanticCube[Type.STRING][Type.STRING][Operation.LESS] = Type.ERR;
semanticCube[Type.STRING][Type.STRING][Operation.GRT] = Type.ERR;
semanticCube[Type.STRING][Type.STRING][Operation.EQL] = Type.BOOL;
semanticCube[Type.STRING][Type.STRING][Operation.DIFF] = Type.BOOL;
semanticCube[Type.STRING][Type.STRING][Operation.ASSIGN] = Type.STRING;

semanticCube[Type.STRING][Type.BOOL][Operation.MULT] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.DIV] =  Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.SUM] =  Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.MINUS] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.AND] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.OR] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.NOT] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.LESS] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.GRT] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.EQL] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.DIFF] = Type.ERR;
semanticCube[Type.STRING][Type.BOOL][Operation.ASSIGN] = Type.ERR;

// BOOL OPS
semanticCube[Type.BOOL][Type.BOOL][Operation.MULT] = Type.ERR;
semanticCube[Type.BOOL][Type.BOOL][Operation.DIV] =  Type.ERR;
semanticCube[Type.BOOL][Type.BOOL][Operation.SUM] =  Type.ERR;
semanticCube[Type.BOOL][Type.BOOL][Operation.MINUS] = Type.ERR;
semanticCube[Type.BOOL][Type.BOOL][Operation.AND] = Type.BOOL;
semanticCube[Type.BOOL][Type.BOOL][Operation.OR] = Type.BOOL;
semanticCube[Type.BOOL][Type.BOOL][Operation.NOT] = Type.BOOL;
semanticCube[Type.BOOL][Type.BOOL][Operation.LESS] = Type.ERR;
semanticCube[Type.BOOL][Type.BOOL][Operation.GRT] = Type.ERR;
semanticCube[Type.BOOL][Type.BOOL][Operation.EQL] = Type.ERR;
semanticCube[Type.BOOL][Type.BOOL][Operation.DIFF] = Type.ERR;
semanticCube[Type.BOOL][Type.BOOL][Operation.ASSIGN] = Type.BOOL;
