import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		console.log(params);
		return {
			test: 'test text'
		};
	}
});
