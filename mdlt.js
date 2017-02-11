#!/usr/bin/env node
var metadelta = require('metadelta');

const DEBUG = false;

var operations = {
  simplify: metadelta.simplify,
  factor: metadelta.factor,
  zeroes: metadelta.zeroes,
  integrate: metadelta.integrate,
  derive: metadelta.derive,
  cos: metadelta.cos,
  sin: metadelta.sin,
  tan: metadelta.tan,
  arccos: metadelta.arccos,
  arcsin: metadelta.arcsin,
  arctan: metadelta.arcsin,
  abs: metadelta.abs,
  tangent: function(expression){
    var data = expression.split('|');
    var at = parseInt(data[0]);
    var f = data[1];
    return metadelta.tangent(f, at);
  },
  area: function(expression){
    var split = expression.split('|');
    var f = split[1];
    var from = split[0].split(':')[0];
    var to   = split[0].split(':')[1];
    return '' + metadelta.areaUnder(f, { start: from, finish: to });
  }
};

var operation = process.argv[2];
var input = '';
for(var i = 3; i < process.argv.length; i++){
  input += ' ' + process.argv[i];
}

if(DEBUG){
  console.log(process.argv);
  console.log('Operation: '+operation);
  console.log('Input: '+input);
}

try {
  console.log(operations[operation](input));
}catch(err){
  console.log('Improper format.\n\nUsage: mdlt [operation] [expression]');
}
