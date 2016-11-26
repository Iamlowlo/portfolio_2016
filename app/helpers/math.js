import Ember from 'ember';

export function math(params) {
	var firstVal = params[0],
		operator = params[1],
		secondVal = params[2];
	switch (operator) {
		case '+':
			return firstVal + secondVal;
		case '-':
			return firstVal - secondVal;
		case '*':
			return firstVal * secondVal;
		case '/':
			return firstVal / secondVal;
		case '%':
			return firstVal % secondVal;
		default:
			return firstVal + secondVal;
	}
}

export default Ember.Helper.helper(math);
