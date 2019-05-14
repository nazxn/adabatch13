// console.log(process.argv)

var l = process.argv.length;
var sum = 0;

for(var i=2; i<l; i++) {
	var str = process.argv[i];
	var num = Number(str);
	sum = sum + num;

}

console.log(sum)

// var sum = 0;

// for (i=2; i<process.argv.length;i++){
// 	sum += Number(process.argv[i])
// }
// console.log(sum)

