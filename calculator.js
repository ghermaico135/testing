/** @format */

class Calculator {
	constructor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	add(num1, num2) {
		return this.num1 + this.num2;
	}

	subtract() {
		return this.num1 - this.num2;
	}

	divide() {
		return this.num1 / this.num2;
	}

	multiply() {
		return this.num1 * this.num2;
	}
}

module.exports = Calculator;
// const calc = new Calculator(9, 5);
// console.log(calc.add());
// console.log(calc.subtract());
// console.log(calc.divide());
// console.log(calc.multiply());
