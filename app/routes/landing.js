import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
				title: 'Section Title 1',
				link: 'front-end-development',
				text: 'Crypto-nodality fluidity weathered human cardboard hotdog grenade bridge film rebar table papier-mache systema sunglasses boy.',
				footer: [
					{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot1-1',
						link: {
							route : 'section-link',
							param: '1'
						}
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot1-2',
						link: {
							route : 'section-link',
							param: '2'
						}
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot1-3',
						link: {
							route : 'section-link',
							param: '3'
						}
					}
				]
			},{
				title: 'Section Title 2',
				link: 'graphic-design',
				text: 'Weathered alcohol nano-faded grenade 8-bit futurity cartel long-chain hydrocarbons Chiba bomb.',
				footer: [
					{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot2-1',
						link: {
							route : 'section-link',
							param: '5'
						}
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot2-2',
						link: {
							route : 'section-link',
							param: '6'
						}
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot2-3',
						link: {
							route : 'section-link',
							param: '7'
						}
					}
				]
			},{
				title: 'Section Title 3',
				link: 'photography',
				text: 'Pistol corrupted spook artisanal construct shoes tank-traps uplink narrative. Warehouse dome chrome Legba youtube spook voodoo god-space neural pre-A.I.',
				footer: [
					{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot3-1',
						link: {
							route : 'section-link',
							param: '8'
						}
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot3-2',
						link: {
							route : 'section-link',
							param: '9'
						}
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot3-3',
						link: {
							route : 'section-link',
							param: '10'
						}
					}
				]
			}
		];
	},
	actions: {
		willTransition() {
			window.scroll(0,0);
		}
	}
});
