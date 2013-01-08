(function(exports) {

	return (exports.Calculator || (exports.Calculator = {})).ID = {
		container: document.getElementById('container'),
		equationDiv: document.getElementById('equation'),
		outputPanel: document.getElementById('resultBox'),
		plus: document.getElementById('plus'),
		minus: document.getElementById('minus'),
		equals: document.getElementById('equals'),
		multiply: document.getElementById('multiply'),
		divide: document.getElementById('divide'),
		dot: document.getElementById('dot'),
		reciprocal: document.getElementById('reciprocal'),
		percent: document.getElementById('percent'),
		squared: document.getElementById('squared'),
		squareRoot: document.getElementById('squareRoot'),
		cancel: document.getElementById('cancel'),
		reset: document.getElementById('reset'),
		delete: document.getElementById('backspace'),
		values: []
	}
})(window)