import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return [{
			id: 0,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/4589C1/333',
				screen_sm: 'http://fakeimg.pl/320x180/4589C1/333',
				screen_md: 'http://fakeimg.pl/640x360/4589C1/333',
				screen_lg: 'http://fakeimg.pl/1280x720/4589C1/333',
				screen_xlg: 'http://fakeimg.pl/1920x1080/4589C1/333'
			},
			title: 'Photo Title 0'
		},{
			id: 1,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/0B7F6C/333',
				screen_sm: 'http://fakeimg.pl/320x180/0B7F6C/333',
				screen_md: 'http://fakeimg.pl/640x360/0B7F6C/333',
				screen_lg: 'http://fakeimg.pl/1280x720/0B7F6C/333',
				screen_xlg: 'http://fakeimg.pl/1920x1080/0B7F6C/333'
			},
			title: 'Photo Title 1'
		},{
			id: 2,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/25153F/F2F2F2',
				screen_sm: 'http://fakeimg.pl/320x180/25153F/F2F2F2',
				screen_md: 'http://fakeimg.pl/640x360/25153F/F2F2F2',
				screen_lg: 'http://fakeimg.pl/1280x720/25153F/F2F2F2',
				screen_xlg: 'http://fakeimg.pl/1920x1080/25153F/F2F2F2'
			},
			title: 'Photo Title 2'
		},{
			id: 3,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/3F2072/F2F2F2',
				screen_sm: 'http://fakeimg.pl/320x180/3F2072/F2F2F2',
				screen_md: 'http://fakeimg.pl/640x360/3F2072/F2F2F2',
				screen_lg: 'http://fakeimg.pl/1280x720/3F2072/F2F2F2',
				screen_xlg: 'http://fakeimg.pl/1920x1080/3F2072/F2F2F2'
			},
			title: 'Photo Title 3'
		},{
			id: 4,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/296DA5/333',
				screen_sm: 'http://fakeimg.pl/320x180/296DA5/333',
				screen_md: 'http://fakeimg.pl/640x360/296DA5/333',
				screen_lg: 'http://fakeimg.pl/1280x720/296DA5/333',
				screen_xlg: 'http://fakeimg.pl/1920x1080/296DA5/333'
			},
			title: 'Photo Title 4'
		},{
			id: 5,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/23AF98/333',
				screen_sm: 'http://fakeimg.pl/320x180/23AF98/333',
				screen_md: 'http://fakeimg.pl/640x360/23AF98/333',
				screen_lg: 'http://fakeimg.pl/1280x720/23AF98/333',
				screen_xlg: 'http://fakeimg.pl/1920x1080/23AF98/333'
			},
			title: 'Photo Title 5'
		},{
			id: 6,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/1F4E75/F2F2F2',
				screen_sm: 'http://fakeimg.pl/320x180/1F4E75/F2F2F2',
				screen_md: 'http://fakeimg.pl/640x360/1F4E75/F2F2F2',
				screen_lg: 'http://fakeimg.pl/1280x720/1F4E75/F2F2F2',
				screen_xlg: 'http://fakeimg.pl/1920x1080/1F4E75/F2F2F2'
			},
			title: 'Photo Title 6'
		},{
			id: 7,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/3F2072/F2F2F2',
				screen_sm: 'http://fakeimg.pl/320x180/3F2072/F2F2F2',
				screen_md: 'http://fakeimg.pl/640x360/3F2072/F2F2F2',
				screen_lg: 'http://fakeimg.pl/1280x720/3F2072/F2F2F2',
				screen_xlg: 'http://fakeimg.pl/1920x1080/3F2072/F2F2F2'
			},
			title: 'Photo Title 7'
		},{
			id: 8,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/6E4AA8/F2F2F2',
				screen_sm: 'http://fakeimg.pl/320x180/6E4AA8/F2F2F2',
				screen_md: 'http://fakeimg.pl/640x360/6E4AA8/F2F2F2',
				screen_lg: 'http://fakeimg.pl/1280x720/6E4AA8/F2F2F2',
				screen_xlg: 'http://fakeimg.pl/1920x1080/6E4AA8/F2F2F2'
			},
			title: 'Photo Title 8'
		},{
			id: 9,
			urlList: {
				thumbnail: 'http://fakeimg.pl/100x100/25153F/F2F2F2',
				screen_sm: 'http://fakeimg.pl/320x180/25153F/F2F2F2',
				screen_md: 'http://fakeimg.pl/640x360/25153F/F2F2F2',
				screen_lg: 'http://fakeimg.pl/1280x720/25153F/F2F2F2',
				screen_xlg: 'http://fakeimg.pl/1920x1080/25153F/F2F2F2'
			},
			title: 'Photo Title 9'
		}]
	},
	queryParams: {
		photo_id: {
			replace: true
		}
	},
	setupController(controller, model, queryParams) {
		this._super(controller, model);

		controller.set('queryParams', ['photo_id']);
		controller.set('photo_id', 0);
	}
});
