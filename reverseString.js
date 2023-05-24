/** @format */
function reverseString(string) {
	let stringArray = string.split("");
	stringArray = stringArray.reverse();
	let joinStringArray = stringArray.join("");

	return joinStringArray;
}

module.exports = reverseString;
