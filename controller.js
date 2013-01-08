(function(ID, pubSub, operations, shim) {
	// Inherit from both operations
	var Calc = shim.clone(operations),
		userValues = {
			values: ID.values,
			operation: Calc.add //default operation
		};

	/*
		@description:- gets the current display value and updates it to the values array.
					:- Also registers the action to be taken.
	 */
	pubSub.subscribe("initArray", function(target) {
		var val = parseFloat(Calc.getString());
		userValues.values[0] = val;

		userValues.operation = Calc[target.id];
		console.log(userValues);

		return this;
	});

	/*
		@description:- Takes the Value of the resultsPanel and puts it on the EquationDiv
					:- Resets the resultPanel to 0

		@param {Object} target:- Currently clicked target. From event.target;
		@param {Boolean} symbol:- True/False to add the corresponding sign (+/-) etc
	 */
	pubSub.subscribe("updateEquationDiv", function(target, symbol) {
		Calc.clearResultsPanel();

		if (symbol) {
			ID.equationDiv.innerHTML = userValues.values[0] + " " + target.value +" ";
		} else {
			ID.equationDiv.innerHTML += userValues.values[1]
		}

		return this;
	})


	/*
		@description:- Resets the default operation to "add" and empties the Values Array.
	 */
	pubSub.subscribe("flushArray", function() {
		Calc.c();

		userValues.operation = Calc.add;
		userValues.values.length = 0;

		return this;
	})

	/*
		@description:- Makes sure that the first value on the array is present.
					:- then adds the new display value to the array.
	 */
	pubSub.subscribe("updateArray", function() {
		if (userValues.values[0] !== "Undefined") {
			var val = parseFloat(Calc.getString());
			userValues.values[1] = val;

			console.log(userValues.values);
		}

		return this;
	})

	/*
		@description:- Performs/calls the corresponding operations.
					:- Updates the results panel.
	 */
	pubSub.subscribe("action", function(target) {
		this.on("updateEquationDiv", target, false);
		var res = userValues.operation.apply(this, userValues.values);

		ID.outputPanel.value = res;

		return this;
	})

	/*
		@description:- Handles ALL click events applied to calculator.

		@param {Object} event:- Native browser event Object
		@return {Undefined}	
	 */
	function handler(event) {
		var target = event.target || event.srcElement;

		if(target.type.toLowerCase() === "button" && target.name.toLowerCase() === "appear") {
			ID.outputPanel.value += target.value;
		}

		switch(target.id) {
			case "backspace": {
				Calc.delete();
			}			
			break;

			case "reset":
			case "cancel":
				pubSub.on("flushArray")
			break;

			case "add":
			case "minus":
			case "divide":
			case "multiply":
				pubSub.on("initArray", target).on("updateEquationDiv", target, true);
			break;

			case "square":

			break;

			case "squareRoot":
			case "reciprocal":

			break;

			case "equals":
				pubSub.on("updateArray").on("action", target)
			break;
		}
	}

	window.Calculator.handler = handler;
	window.Calculator.Calc = Calc;
})(window.Calculator.ID, window.Calculator.pubSub, window.Calculator.operations, window.Calculator.shim)