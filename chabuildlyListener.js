// Generated from chabuildly.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by chabuildlyParser.
function chabuildlyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

chabuildlyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
chabuildlyListener.prototype.constructor = chabuildlyListener;

// Enter a parse tree produced by chabuildlyParser#program.
chabuildlyListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#program.
chabuildlyListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#mainFunction.
chabuildlyListener.prototype.enterMainFunction = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#mainFunction.
chabuildlyListener.prototype.exitMainFunction = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#function.
chabuildlyListener.prototype.enterFunction = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#function.
chabuildlyListener.prototype.exitFunction = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#vars.
chabuildlyListener.prototype.enterVars = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#vars.
chabuildlyListener.prototype.exitVars = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#block.
chabuildlyListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#block.
chabuildlyListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#statement.
chabuildlyListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#statement.
chabuildlyListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#conditional.
chabuildlyListener.prototype.enterConditional = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#conditional.
chabuildlyListener.prototype.exitConditional = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#write.
chabuildlyListener.prototype.enterWrite = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#write.
chabuildlyListener.prototype.exitWrite = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#expression.
chabuildlyListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#expression.
chabuildlyListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#bExpression.
chabuildlyListener.prototype.enterBExpression = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#bExpression.
chabuildlyListener.prototype.exitBExpression = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#params.
chabuildlyListener.prototype.enterParams = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#params.
chabuildlyListener.prototype.exitParams = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#type.
chabuildlyListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#type.
chabuildlyListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#loop.
chabuildlyListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#loop.
chabuildlyListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#exp.
chabuildlyListener.prototype.enterExp = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#exp.
chabuildlyListener.prototype.exitExp = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#term.
chabuildlyListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#term.
chabuildlyListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#factor.
chabuildlyListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#factor.
chabuildlyListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#assignment.
chabuildlyListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#assignment.
chabuildlyListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#returnStmt.
chabuildlyListener.prototype.enterReturnStmt = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#returnStmt.
chabuildlyListener.prototype.exitReturnStmt = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#funcCall.
chabuildlyListener.prototype.enterFuncCall = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#funcCall.
chabuildlyListener.prototype.exitFuncCall = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#cte.
chabuildlyListener.prototype.enterCte = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#cte.
chabuildlyListener.prototype.exitCte = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#list.
chabuildlyListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#list.
chabuildlyListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#listStmt.
chabuildlyListener.prototype.enterListStmt = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#listStmt.
chabuildlyListener.prototype.exitListStmt = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#boolOp.
chabuildlyListener.prototype.enterBoolOp = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#boolOp.
chabuildlyListener.prototype.exitBoolOp = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#drawingStmts.
chabuildlyListener.prototype.enterDrawingStmts = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#drawingStmts.
chabuildlyListener.prototype.exitDrawingStmts = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#drwShape.
chabuildlyListener.prototype.enterDrwShape = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#drwShape.
chabuildlyListener.prototype.exitDrwShape = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#shape.
chabuildlyListener.prototype.enterShape = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#shape.
chabuildlyListener.prototype.exitShape = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#line.
chabuildlyListener.prototype.enterLine = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#line.
chabuildlyListener.prototype.exitLine = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#polygon.
chabuildlyListener.prototype.enterPolygon = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#polygon.
chabuildlyListener.prototype.exitPolygon = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#circle.
chabuildlyListener.prototype.enterCircle = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#circle.
chabuildlyListener.prototype.exitCircle = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#rectangle.
chabuildlyListener.prototype.enterRectangle = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#rectangle.
chabuildlyListener.prototype.exitRectangle = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#point.
chabuildlyListener.prototype.enterPoint = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#point.
chabuildlyListener.prototype.exitPoint = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#color.
chabuildlyListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#color.
chabuildlyListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#back.
chabuildlyListener.prototype.enterBack = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#back.
chabuildlyListener.prototype.exitBack = function(ctx) {
};


// Enter a parse tree produced by chabuildlyParser#random.
chabuildlyListener.prototype.enterRandom = function(ctx) {
};

// Exit a parse tree produced by chabuildlyParser#random.
chabuildlyListener.prototype.exitRandom = function(ctx) {
};



exports.chabuildlyListener = chabuildlyListener;