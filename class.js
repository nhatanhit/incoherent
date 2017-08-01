

function Class(){};

(function(){
	var initializing = false
	var fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
	 
	Class.extend = function(prop) {
		//_super is Object
		var _super = this.prototype;
		initializing = true;
		
		//create new prototypes for Class 
		var prototype = new this();
		initializing = false;
		
		//copy all function of extended Class to created prototoype
		for (var name in prop) {
			if(typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name])) {
				prototype[name] = (function(name, fn){
					return function() {
						var tmp = this._super;
						this._super = _super[name];
						var ret = fn.apply(this, arguments);
						this._super = tmp;
						return ret;
					};
				})(name, prop[name]);	 
			} else {
				prototype[name] = prop[name];
			}
		}
		
		
		function Class() {
			
			if (!initializing && this.init)
			this.init.apply(this, arguments);
		}
		 
		//re-create prototype for Class object
		Class.prototype = prototype;
		 
		//set constructor point to above function
		Class.constructor = Class;
		 
		//set extend function point to itself
		Class.extend = arguments.callee;
		 
		return Class;
	};
})();
