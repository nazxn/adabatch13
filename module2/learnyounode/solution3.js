var fs = require('fs')

var data = fs.readFileSync(process.argv[2])

console.log((data.toString().split('\n').length)-1);


// ANSWER:
// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)