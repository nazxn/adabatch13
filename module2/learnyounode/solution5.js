var fs = require('fs')
var path = require('path')

var data = fs.readdir(process.argv[2], function (err, data){
	if (err) return console.error(err);
		console.log(data)

		if (path).extname(data) = ('')



		// console.log((data.toString().split('\n').length)-1);
})


//fs.readdir() = will give you LS

// var path = require('path');

// var ext = path.extname('/Users/Refsnes/demo_path.js');
// console.log(ext); 

//*path.extname() method returns the extenion of a file path.