var fs = require('fs')

console.log('Begin Reading File')
fs.readFile('input.txt', function(err, data) {
	if (err) console.error(err)
		console.log(data.toString())
	console.log('End Reading File')
	console.log('Begin Appending File')
	fs.appendFile('input.txt', 'data to append', function(err) {
		if (err) throw err; // throw err = console.log(err)
			console.log('End Appending File')
			console.log('Begin Re-reading File')
			fs.readFile('input.txt', function(err, data) { //need to repeat in order to append new file.
				if (err) throw err;
					console.log(data.toString()) // otherwise, if start from here, it'll append the old file (at the top)
					console.log('End Re-reading File')
	})
})


// var fs = require('fs')

// console.log('Begin Reading File')
// var data = fs.readFile('input.txt', function(err, data) {
// 	if (err) return console.error(err);
// 		console.log(data.toString());
// })
// console.log('End Reading File')
// console.log('Begin re-reading file')

// console.log('Begin Appending File')
// fs.appendFile('input.txt', data, function(err) {
// 			if (err) throw err;
// 			console.log('Begin re-reading file')

// });