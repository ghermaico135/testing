/** @format */

function capitalize(string) {
	let wordString =
		string.substring(0, 1).toUpperCase() + string.substring(1, string.length);
	return wordString;
}

module.exports = capitalize;
