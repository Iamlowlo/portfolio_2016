import Ember from 'ember';
import _ from 'lodash/lodash';
import config from './../config/environment';

export default Ember.Component.extend({
	classNames: ['responsive_photo'],
	classNameBindings: ['isFullScreen:app_container'],
	isFullScreen: false,
	init() {
		this._super(...arguments);
		this.set('mediaQueries', config.mediaQueries);
	},
	didInsertElement() {
		this._resizeHelper = function(){
			this.set('width', $(window).innerWidth());
		}.bind(this);
		$(window).on('resize', this._resizeHelper);
		this._resizeHelper();
	},
	willDestroyElement() {
		$(window).off('resize', this._resizeHelper);
	},
	breakPoint: Ember.computed('width', function(){
		var width = this.get('width'),
			breakPoint = _.findLast(this.mediaQueries, function(mq) {
				return width >= mq.value; 
			});
		return breakPoint ? breakPoint : _.find(this.mediaQueries, function(mq){ return mq; });
	}),
	activePhoto: Ember.computed('breakPoint', 'urlList', function(){
		var breakPoint = this.get('breakPoint'),
			urlList = this.get('urlList');
		return (breakPoint) ? urlList[breakPoint.name] : '';
	})
});
