//Operation Types

var Type: {
  NUMBER: 1,
  STRING: 2,
  BOOL : 3,
};

var Operation: {
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
  ERR: 90,
};

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
