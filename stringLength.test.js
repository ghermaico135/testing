/** @format */

const stringLength = require("./stringLength");

test("String count", () => {
	expect(stringLength("string")).toBe(6);
});

test("string length is equal to 1 or lessThan or equal to 10", () => {
	const count = stringLength("string");
	expect(count).toBeLessThanOrEqual(10);
});

// it("works", () => {});

// if (stringLength("string") < 1 || stringLength("string") > 10) {
// 	throw new Error("check fail,count less than 1 or greater than 10");
// }
