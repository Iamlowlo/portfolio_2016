import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			title: 'Front End Development',
			feed: [{
				title: "Reebok",
				link: {
					link: "section-link",
					param: "1"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "Bq",
				link: {
					link: "section-link",
					param: "2"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "Flickr Map",
				link: {
					link: "section-link",
					param: "3"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "Honda F1",
				link: {
					link: "section-link",
					param: "4"
				},
				background: "http://fakeimg.pl/450x150"
			},{
				title: "La Poste",
				link: {
					link: "section-link",
					param: "5"
				},
				background: "http://fakeimg.pl/450x150"
			}]
		};
	}
});
