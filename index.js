exports.sum = function(values) {
	return values.reduce((acc, value) => {
		return acc + value;
	}, 0)
}
