var arithmetic   = require('./src/arithmetic.js');
var algebra      = require('./src/algebra.js');
var calculus     = require('./src/calculus.js');

/* ARITHMETIC */
module.exports.abs       = arithmetic.abs;
module.exports.sin       = arithmetic.sin;
module.exports.cos       = arithmetic.cos;
module.exports.tan       = arithmetic.tan;
module.exports.arccos    = arithmetic.arccos;
module.exports.arcsin    = arithmetic.arcsin;
module.exports.arctan    = arithmetic.arctan;

/* ALGEBRA */
module.exports.simplify  = algebra.simplify;
module.exports.factor    = algebra.factor;
module.exports.zeroes    = algebra.zeroes;
module.exports.solve     = algebra.solve;

/* CALCULUS */
module.exports.derive    = calculus.derive;
module.exports.tangent   = calculus.tangent;
module.exports.integrate = calculus.integrate; // indefinite integral
module.exports.areaUnder = calculus.areaUnder; // definite integral
