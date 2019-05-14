var fs = require('fs') //I'm going to use: fs module (a pre-existing code that can be written and can be reused)

var data = fs.readFileSync('input.txt'); //open input in .txt file

console.log(data.toString()); //show it
console.log("Program Ended"); //type this