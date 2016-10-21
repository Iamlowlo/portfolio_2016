import Ember from 'ember';

export default Ember.Route.extend({
	init() {
		this._super(...arguments);
		this.sections = [
			{
				title: 'Section Title 1',
				link: 'section-link',
				text: 'Crypto-nodality fluidity weathered human cardboard hotdog grenade bridge film rebar table papier-mache systema sunglasses boy. Kanji wristwatch faded vinyl man claymore mine beef noodles human corrupted pre-San Francisco wonton soup film physical katana denim knife. Camera tattoo tiger-team into weathered render-farm sentient cyber-industrial grade tower sign Kowloon advert boat cardboard. Bomb dissident ablative drone tower woman beef noodles tanto dolphin weathered denim.',
				footer: [
					{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot1-1',
						link: 'section-link/1'
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot1-2',
						link: 'section-link/2'
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot1-3',
						link: 'section-link/3'
					}
				]
			},{
				title: 'Section Title 2',
				link: 'section-link',
				text: 'Crypto-nodality fluidity weathered human cardboard hotdog grenade bridge film rebar table papier-mache systema sunglasses boy. Kanji wristwatch faded vinyl man claymore mine beef noodles human corrupted pre-San Francisco wonton soup film physical katana denim knife. Camera tattoo tiger-team into weathered render-farm sentient cyber-industrial grade tower sign Kowloon advert boat cardboard. Bomb dissident ablative drone tower woman beef noodles tanto dolphin weathered denim.',
				footer: [
					{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot2-1',
						link: 'section-link/5'
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot2-2',
						link: 'section-link/6'
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot2-3',
						link: 'section-link/7'
					}
				]
			},{
				title: 'Section Title 3',
				link: 'section-link',
				text: 'Crypto-nodality fluidity weathered human cardboard hotdog grenade bridge film rebar table papier-mache systema sunglasses boy. Kanji wristwatch faded vinyl man claymore mine beef noodles human corrupted pre-San Francisco wonton soup film physical katana denim knife. Camera tattoo tiger-team into weathered render-farm sentient cyber-industrial grade tower sign Kowloon advert boat cardboard. Bomb dissident ablative drone tower woman beef noodles tanto dolphin weathered denim.',
				footer: [
					{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot3-1',
						link: 'section-link/8'
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot3-2',
						link: 'section-link/9'
					},{
						background: 'http://fakeimg.pl/250x150',
						title: 'foot3-3',
						link: 'section-link/10'
					}
				]
			}
		]
	}
});
