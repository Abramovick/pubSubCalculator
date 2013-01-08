(function (exports, ID) {
	/*
		@description: Utilities Constructor.
	*/
	function Utilities () {}


	/*
		@description: Adds two numbers

		@param {Number} numOne - first number
		@param {Number} numTwo - second number
		@return {Number} - Results of addition or 'undefined' addition if failed.
	 */
	Utilities.prototype.add = function(numOne, numTwo) {
		numOne = parseFloat(numOne, 10);
		numTwo = parseFloat(numTwo, 10);

		if (!isNaN(numOne) || !isNaN(numTwo)){
			return numOne + numTwo;
		} else {
			console.log("The entry items are not numbers!")
		}
	};


	/*
		@description: Takes away two numbers

		@param {Number} numOne - first number
		@param {Number} numTwo - second number
		@return {Number} - Results of substraction / 'undefined' if failed.
	 */
	Utilities.prototype.minus = function(numOne, numTwo) {
		numOne = parseFloat(numOne, 10);
		numTwo = parseFloat(numTwo, 10);
		
		if (!isNaN(numOne) || !isNaN(numTwo)){
			return numOne - numTwo;
		} else {
			console.log("The entry items are not numbers!")
		}
	};


	/*
		@description: multiplies two numbers

		@param {Number} numOne - first number
		@param {Number} numTwo - second number
		@return {Number} - Results of multiplication or 'undefined' if failed.
	 */
	Utilities.prototype.multiply = function(numOne, numTwo) {
		numOne = parseFloat(numOne, 10);
		numTwo = parseFloat(numTwo, 10);
		
		if (!isNaN(numOne) || !isNaN(numTwo)){
			return numOne * numTwo;
		} else {
			console.log("The entry items are not numbers!")
		}
	};


	/*
		@description: Divides two numbers

		@param {Number} numOne - first number
		@param {Number} numTwo - second number
		@return {Number} - Results of division or 'undefined' if division failed.
	 */
	Utilities.prototype.divide = function(numOne, numTwo) {	
		numOne = parseFloat(numOne, 10);
		numTwo = parseFloat(numTwo, 10);

		if (!isNaN(numOne) || !isNaN(numTwo)){
			return numOne / numTwo;
		} else {
			console.log("The entry items are not numbers!")
		}
	};


	/*
		@description: Finds the reciprocal of a number

		@param {Number} num - first number
		@return {Number} - Results of reciprocal or 'undefined' if sfailed.
	 */
	Utilities.prototype.reciprocal = function(num) {
		num = parseFloat(num, 10);
		
		if (!isNaN(num)){
			return 1 / num;
		} else {
			console.log("The entry items are not numbers!")
		}
	};


	/*
		@description: Finds the square root of a number

		@param {Number} num - first number
		@return {Number} - Results of square root or 'undefined' if failed.
	 */
	Utilities.prototype.squareRoot = function(num) {
		num = parseFloat(num, 10);
		
		if (!isNaN(num)){
			return Math.sqrt(num);
		} else {
			console.log("The entry items are not numbers!")
		}
	};


	/*
		@description: Finds the square of a number

		@param {Number} numOne - first number
		@param {Number} numTwo - second number
		@return {Number} - Results of square or 'undefined' if failed.
	 */
	Utilities.prototype.square = function(numOne, numTwo) {
		numOne = parseFloat(numOne, 10);
		numTwo = parseFloat(numTwo, 10);

		if (!isNaN(numOne) || !isNaN(numTwo)){
			return Math.pow(numOne,numTwo);
		} else {
			console.log("The entry items are not numbers!")
		}
	};
	
	return (exports.Calculator || (exports.Calculator = {})).utilities = new Utilities();
})(window, window.Calculator.ID)