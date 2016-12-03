import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['photo_gallery'],
	photoList: [],
	selectedId: 0,
	selectedPhotography: Ember.computed('photoList', 'selectedId', function(){
		var photoId = this.get('selectedId'),
			photoList = this.get('photoList');
		return photoList.filterBy('id', (photoId) ? parseInt(photoId) : 0)[0];
	})
});
