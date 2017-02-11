/*
  This is the file containing all of the arithmetic
  functionality of metadelta.

  Copyright (C) Gerald Nash 2016-2017
*/

var algebrite = require('algebrite');

// Each of algebrite's arithmetic functions
// only returns clean output after calling toString
// on it. convertToString() allows us to "rewrite" 
// these functions by creating a function wrapper
// that passes the actual argument to the arithmetic function
// and immediately get the string output
function convertToString(f){
  return function(x){
    return f(x).toString();
  }
}

module.exports.abs       = convertToString(algebrite.abs);
module.exports.sin       = convertToString(algebrite.sin);
module.exports.cos       = convertToString(algebrite.cos);
module.exports.tan       = convertToString(algebrite.tan);
module.exports.arccos    = convertToString(algebrite.arccos);
module.exports.arcsin    = convertToString(algebrite.arcsin);
module.exports.arctan    = convertToString(algebrite.arctan);
