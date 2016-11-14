import Ember from 'ember';

export function math(params) {
	var firstVal = params[0],
		operator = params[1],
		secondVal = params[2];
	switch (operator) {
		case '+':
			return firstVal + secondVal;
			break;
		case '-':
			return firstVal - secondVal;
			break;
		case '*':
			return firstVal * secondVal;
			break;
		case '/':
			return firstVal / secondVal;
			break;
		case '%':
			return firstVal % secondVal;
			break;
		default:
			return firstVal + secondVal;
			break;
	}
}

export default Ember.Helper.helper(math);
