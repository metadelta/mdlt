/*
  This is the file containing all of the calculus
  functionality of metadelta.

  Copyright (C) Gerald Nash 2016-2017
*/

var algebrite = require('algebrite');
var algebra   = require('./algebra.js');

// Wrap algebrite's derivative function so that we
// can immediately get a pretty string output
module.exports.derive = function(expression){
  return algebrite.derivative(expression).toString();
};


// Use calculus to find the line tangent to a function
// at a certain x value

// y = m * x + b == f(x) = f'(x) * x + b
// We are given f(x) and x and can easily find f'(x) using predefined functions.
// We must now use algebra to find b.

// We can do so by:
// If f(x) = f'(x) * x + b, then
// f(x) - f'(x) * x = b
// See below for implementation 
module.exports.tangent = function(expression, at){
    // f(x) - xf'(x) = b
    var fx = parseInt(algebrite.run(expression.split('x').join(''+at)));
    var fp = module.exports.derive(expression);
    var fpx = algebrite.run(fp.split('x').join(''+at));
    var b = fx - at * parseInt(fpx);

    return fpx + ' x + ' + b;
};

// Wrap algebrite's integral function so that we can
// immediately get a pretty string output
module.exports.integrate = function(expression){
  return algebrite.integral(expression).toString();
};


// Denoted by the fundamental theorem of calculus,
// the area under a curve can be found by subtracting
// the definite integral of the lower limit from the
// definite integral of the upper limit

// In other words: Given a function f(x)
// whose definite integral is F(x)
// If we're looking for the area under this function in interval [a, b],
// then the area under the curve in this interval is F(b) - F(a)
module.exports.areaUnder = function(expression, data){
  var a = data.start;
  var b   = data.finish;
  var F = module.exports.integrate(expression);
  var Fofa = parseInt(algebrite.simplify(F.split('x').join(''+a)));
  var Fofb = parseInt(algebrite.simplify(F.split('x').join(''+b)));

  return ''+(Fofb - Fofa);
};
