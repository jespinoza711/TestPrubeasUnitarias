objCalculator = {
	addNumber : function(a,b){
		return a+b;
	},
	substractNumber :function(a,b){
		return a-b;
	},
	multiplyNumber: function(a,b){
		return a*b;
	},
	dividenumber: function(a,b){
		return a/b;
	}
}

if (typeof module!= 'undefined' && module.exports){
	module.exports = objCalculator;
}