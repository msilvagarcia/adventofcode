var fs = require('fs')

fs.readFile('./day1.txt', 'utf8', function (err, data) {
	if (err) throw err

	var floor = 0

	for (var c = 0; c < data.length; c++) {
		if (data[c] === '(') floor += 1
		if (data[c] === ')') floor -= 1

	}
	console.log(floor)
})
