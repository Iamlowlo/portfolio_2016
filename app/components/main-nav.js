import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['main_nav'],
	classNameBindings: ['opened'],
	init() {
		this._super(...arguments);
		this.opened = false;
	},
	actions: {
		toogleNav: function() {
			this.toggleProperty('opened');
		}
	}
});
