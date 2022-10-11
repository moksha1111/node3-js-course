var { readFileSync, writeFileSync } = require("fs");
console.log("Start");
var firstFileSync = readFileSync("./content/first.txt","utf-8");
var secondtFileSync = readFileSync("./content/second.txt","utf-8");

writeFileSync("./content/result-sync.txt",`Result file contains: ${firstFileSync} and ${secondtFileSync}`);
console.log('done with this task');
console.log('starting with next task');

// var fs = require('fs')

// var firstFileSync = fs.readFileSync("./content/first.txt","utf-8");
// console.log(firstFileSync);
// var secondtFileSync = fs.readFileSync("./content/second.txt","utf-8");
// console.log(secondtFileSync);


// var writeSync = fs.writeFileSync("./content/result.txt",`Result file contains: ${firstFileSync} and ${secondtFileSync}`);