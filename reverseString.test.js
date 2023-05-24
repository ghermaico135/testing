/** @format */

const reverseString = require("./reverseString");

test("reverse string 'miki' to 'ikim'", () => {
	const reversed = reverseString("miki");
	expect(reversed).toBe("ikim");
});
