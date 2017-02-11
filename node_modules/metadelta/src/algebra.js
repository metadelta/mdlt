/*
  This is the file containing all of the algebraic
  functionality of metadelta.

  Copyright (C) Gerald Nash 2016-2017
*/

var algebrite = require('algebrite');
var solver    = require('delta-solver');

// Export simplify function as is
module.exports.simplify = algebrite.run;

// Wrap algebrite's factor expression in a
// function that converts its output to a pretty
// string that we can actually return
module.exports.factor = function(expression){
  return algebrite.factor(expression).toString();
};

// Convert the string output of algebrite's "roots" function
// to an array that we can return
// TODO: Use advanced algebra and/or Newton's method to 
//       find roots of transcendental and more complex functions
module.exports.zeroes = function(oExpression){

  // x^2 - 1 -> '("1", "-1")'
  var str = algebrite.roots(oExpression).toString();

  // '("1", "-1")' -> '"1", "-1"'
  var newStr = str.slice(1, str.length - 1);

  // '"1", "-1"' -> ["1", "-1"]
  var rootStrs = newStr.split(',');

  // ["1", "-1"] -> [1, -1]
  var rootsArr = rootStrs.map(function(rootStr){
    return parseInt(rootStr);
  });

  return rootsArr;
};

// Use metadelta-solver to solve simpler functions
// Note: It gives each step used in solving the 
//       equations, but we only need the last step,
//       since that's our final answer
// TODO: Add trig and transcendental function solving
//       to metadelta-solver 
module.exports.solve = function(oExpression){
  
  // Get our steps as an array
  var steps = solver.solveEquation(oExpression);

  // We don't need each step; the final step will be our answer
  // So, we get resulting equation from the last step
  var finalEquation = steps[steps.length - 1].newEquation;

  // And return the string version of this resulting equation
  return finalEquation.print();
};
