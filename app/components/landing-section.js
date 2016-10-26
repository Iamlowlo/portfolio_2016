import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',
	classNames: ['landing_section'],
	section: {
		title: '',
		text: '',
		links: []
	}
});
