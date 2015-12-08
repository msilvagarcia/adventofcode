var crypto = require('crypto'),
	md5 = crypto.createHash('md5'),
	input = 'iwrupvqb',
	i = 0,
	coin, hex

do {
	i += 1
	coin = crypto.createHash('md5').update(input + i.toString(), 'ascii')
} while ((hex = coin.digest('hex')).slice(0, 5) != '00000')

console.log(i)
