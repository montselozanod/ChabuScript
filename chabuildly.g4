grammar chabuildly;

options {
	language=JavaScript;
}


program :	function* mainFunction;

mainFunction: 'start' '{' vars* block '}' 'end';

function: 'function' type ID params '{' vars* block '}' 'end';

vars : ('var' type ID | list) ';';

block :  '{' statement* '}';

statement : (conditional|assignment|write|loop| returnStmt |funcCall| drawingStmts  | listStmt) ';';

conditional : 'if' expression block ('elif' expression block)? ('else' block)? 'end';

write : 'print' (expression| STRING);

expression :  bExpression (boolOp bExpression)? ;

bExpression :exp ( 'less?' | 'greater?' | 'equals?'| 'different?') exp | 'true' | 'false';

params:'params:' '(' (type ID ';')* ')';

type: 'number'|'string'|'bool';

loop :  'repeat' 'while' '(' expression ')' block 'end';

exp : (term (('+'|'-') term)*);

term : (factor (('*'|'/') factor)*);

factor : ('+' | '-'| 'not')? (cte|funcCall) | '(' exp ')';

assignment : 'set' ID '=' expression;

returnStmt : 'return' expression;

funcCall : 'call' ID '(' (exp ( ',' exp )*)? ')';

cte : ID | NUMBER | STRING;

list : 'list' type 'id' '=' ID '(' (cte)* ')';

listStmt : 'list' ID ('add' cte | 'remove' cte);

boolOp : 'and'| 'or';

drawingStmts : drwShape | back | random;

drwShape : 'draw' 'shape' shape color 'pw:' cte;

shape : line | polygon | circle | rectangle;

line : 'line' 'p1' ':' point 'p2' ':' point;

polygon :'polygon' 'points' ID;

circle : 'circle' 'at' ':' point 'r'':' cte;

rectangle : 'rectangle' 'at'':' point 'w'':' cte 'h'':' cte;

point : 'point' 'x' ':' cte 'y' ':' cte;

color: 'color' '(' cte ',' cte ',' cte ')';

back : 'background' color;

random : 'random' 'num' 'min'':' cte 'max'':' cte;

ID  :	('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*
    ;

NUMBER :	('0'..'9')+(('.')('0'..'9')+)?
    ;

STRING
    :  '"' ( ESC_SEQ | ~('\\'|'"') )* '"'
    ;

fragment
HEX_DIGIT : ('0'..'9'|'a'..'f'|'A'..'F') ;

fragment
ESC_SEQ
    :   '\\' ('b'|'t'|'n'|'f'|'r'|'\"'|'\''|'\\')
    |   UNICODE_ESC
    |   OCTAL_ESC
    ;

fragment
OCTAL_ESC
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;

fragment
UNICODE_ESC
    :   '\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    ;
