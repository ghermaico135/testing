/** @format */
const capitalize = require("./capitalize");
describe("Capitalize string", () => {
	const upperCase = capitalize("string");
	test("should be String", () => {
		expect(upperCase).toEqual("String");
	});
});
