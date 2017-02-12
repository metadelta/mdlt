#!/usr/bin/env node
var operations = require('./operations.js');
const DEBUG = false;

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
  if(DEBUG)
    console.log(err);
  console.log('Improper format.\n\nUsage:\nmdlt [operation] [expression]\nOR\nmdlt [operation] "[expression]"');
}
