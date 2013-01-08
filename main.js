(function(handler, ID, shim) {
	//initialize calculator's default value.
	//ID.outputPanel.value = 0;

	//add Event listeners
	shim.addListener(ID.container, "click", handler);
})(window.Calculator.handler, window.Calculator.ID, window.Calculator.shim)