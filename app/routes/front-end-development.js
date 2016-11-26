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
				background: "https://s-media-cache-ak0.pinimg.com/originals/cb/07/85/cb0785b19d5978ace690fed6bdfa9f1f.jpg"
			},{
				title: "Bq",
				link: {
					link: "section-link",
					param: "2"
				},
				background: "http://images.naldzgraphics.net/2013/06/9-turkish-triangles.jpg"
			},{
				title: "Honda F1",
				link: {
					link: "section-link",
					param: "4"
				},
				background: "https://static.vecteezy.com/system/resources/previews/000/099/823/non_2x/abstract-triangle-geometric-pattern-background-vector.jpg"
			},{
				title: "Flickr Map",
				link: {
					link: "section-link",
					param: "3"
				},
				background: "https://s-media-cache-ak0.pinimg.com/236x/13/4f/f9/134ff98c12edda3d8a179f6819cabeb3.jpg"
			},{
				title: "La Poste",
				link: {
					link: "section-link",
					param: "5"
				},
				background: "https://s-media-cache-ak0.pinimg.com/736x/e2/7e/d5/e27ed5dbeef43ab18c736e217411c7ff.jpg"
			}]
		};
	}
});
