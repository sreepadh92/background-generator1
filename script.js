const obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((keys, index) => {
	console.log(keys, obj[keys])
})

Object.values(obj).forEach(values => {
	console.log(values)
})

Object.entries(obj).forEach(values => {
	console.log(values)
})

Object.entries(obj).map(values => {
	return values[1] + values[0].replace('username', '')
})