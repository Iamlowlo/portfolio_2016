import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			title: 'Graphic Design',
			feed: [{
				title: "PQ Series",
				link: {
					link: "section-link",
					param: "6"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "Gifts",
				link: {
					link: "section-link",
					param: "7"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "Curious Wines",
				link: {
					link: "section-link",
					param: "8"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "Hedphones Area",
				link: {
					link: "section-link",
					param: "9"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "Memory Power",
				link: {
					link: "section-link",
					param: "10"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "Sleep Well",
				link: {
					link: "section-link",
					param: "11"
				},
				background: "http://fakeimg.pl/450x150"
			}]
		};
	}
});
