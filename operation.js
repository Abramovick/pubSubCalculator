(function(exports, ID, utilities) {
	/*
		Cross browser shim for adding events.
	 */
	exports.Calculator.shim = {
		addListener: function(elem, evnt, callback) {
			if (document.addEventListener) {
				elem.addEventListener(evnt, callback, false)
			} else if (document.attachEvent) {
				elem.attachEvent("on" + evnt, callback)
			} else {
				elem["on" + evnt] = callback;
			}
		},

		clone: function(obj) {
			function f () {};
			f.prototype = obj;

			return new f();
		}
	}


	/*
		@description:- Create a custom way of creating/listening to Custom Events.
	 */
	var pubSub = {
		subscribe: function(ev, callback) {
			var calls = this._callbacks || (this._callbacks = {});

			(this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback)

			return this;
		},

		on: function() {
			// get arguments. To do so best, convert it to a proper array.
			var args = Array.prototype.slice.call(arguments);

			// get the name of the event
			eventName = args.shift();

			if(!this._callbacks) return this;
			if(!this._callbacks[eventName] instanceof Array) return this;

			var registeredCallbacks = this._callbacks[eventName];
			for (var i = 0; i < registeredCallbacks.length; i++) {
				registeredCallbacks[i].apply(this, args);

				return this;
			};
		}
	}



	function Operations () {};

	// Inherit from Utilities.
	Operations.prototype = utilities;

	Operations.prototype.getString = function(){
		return ID.outputPanel.value;
	}

	/*
		@description:- Delete the last value on the output Panel
					 - Also update the arra

		@return {Object} this:- the value "this" here is the Operations Object.
	 */
	Operations.prototype.delete = function() {
		var str = this.getString();
		console.log(str.slice(0, str.length - 1));

		var returnValue = str.slice(0, str.length - 1);
		ID.outputPanel.value = returnValue;

		return this;
	};


	/*
		@description:- Wipes out everything on the Screen
					 - Also wipe out everything on the array.

		@return {Object} this:- the value "this" here is the Operations Object		
	 */
	Operations.prototype.c = function() {
		ID.outputPanel.value = "0";
		ID.equationDiv.innerHTML = "";

		return this;
	};

	Operations.prototype.clearResultsPanel = function() {
		ID.outputPanel.value = "0";

		return this;
	};


	exports.Calculator.operations = new Operations();
	exports.Calculator.pubSub = pubSub;
})(window, window.Calculator.ID, window.Calculator.utilities)