/** @format */
const Calculator = require("./calculator");

const calc = new Calculator(9, 5);
const calc2 = new Calculator(5, 5);

describe("Calculator add", () => {
	test("add 9 + 5 = 14", () => {
		expect(calc.add()).toBe(14);
	});
	test("add 5 + 5 = 10", () => {
		expect(calc2.add()).toBeGreaterThanOrEqual(10);
	});

	test("add 9 + 5 = 14", () => {
		expect(calc.add()).not.toBeNaN();
	});
});

describe("Calculator subtract", () => {
	test("add 9 - 5 = 4", () => {
		expect(calc.subtract()).toBe(4);
	});
	test("add 5 + 5 = 10", () => {
		expect(calc2.subtract()).toBeLessThanOrEqual(0);
	});

	test("add 9 - 5 = 4", () => {
		expect(calc.subtract()).toBeGreaterThanOrEqual(1);
	});
});

describe("Calculator Divide method", () => {
	test("add 9 / 5 = 1.8", () => {
		expect(calc.divide()).toBe(1.8);
	});
	test("add 5 / 5 = 25", () => {
		expect(calc2.divide()).toBeLessThanOrEqual(30);
	});

	test("multiply 9 / 5 = 4", () => {
		expect(calc.divide()).toEqual(1.8);
	});
});

describe("Calculator multiply method", () => {
	test("add 9 * 5 = 14", () => {
		expect(calc.multiply()).toBe(45);
	});
	test("add 5 * 5 = 25", () => {
		expect(calc2.multiply()).toBeLessThanOrEqual(30);
	});

	test("multiply 9 * 5 = 45", () => {
		expect(calc.multiply()).not.toBeNaN();
	});
});
