import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
				title: 'Section Title 1',
				link: 'section-link',
				text: 'Crypto-nodality fluidity weathered human cardboard hotdog grenade bridge film rebar table papier-mache systema sunglasses boy. Kanji wristwatch faded vinyl man claymore mine beef noodles human corrupted pre-San Francisco wonton soup film physical katana denim knife. Camera tattoo tiger-team into weathered render-farm sentient cyber-industrial grade tower sign Kowloon advert boat cardboard. Bomb dissident ablative drone tower woman beef noodles tanto dolphin weathered denim.',
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
				link: 'section-link',
				text: 'Weathered alcohol nano-faded grenade 8-bit futurity cartel long-chain hydrocarbons Chiba bomb. Pen free-market lights soul-delay bridge semiotics industrial grade spook A.I. construct grenade office crypto-city faded systemic. Bicycle dissident marketing fluidity advert pre-geodesic office silent papier-mache pistol singularity. Geodesic denim military-grade tank-traps voodoo god RAF boy lights receding wonton soup. ',
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
				link: 'section-link',
				text: 'Pistol corrupted spook artisanal construct shoes tank-traps uplink narrative. Warehouse dome chrome Legba youtube spook voodoo god-space neural pre-A.I. papier-mache pen sensory girl military-grade network. Dissident vehicle neural futurity kanji rebar faded sunglasses franchise. Concrete long-chain hydrocarbons fetishism kanji nodal point marketing rifle physical. Nodality drone post-dome gang grenade katana voodoo god sign crypto-papier-mache urban San Francisco. ',
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
	}
});
