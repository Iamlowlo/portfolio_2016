import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['thumbnail_menu'],
	classNameBindings: ['isOpen:opened', 'isFullSize:fullsize'],
	isOpen: false,
	isFullSize: false,
	actions: {
		toggleMenu() {
			this.toggleProperty('isOpen');
		}
	}
});
