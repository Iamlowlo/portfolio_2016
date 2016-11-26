import Ember from 'ember';
import _ from 'lodash/lodash';
import config from './../config/environment';


// function createArrayForPullBackOne (size) {
// 	return _.map(new Array(size), function(item, index){ return  (9*index)+4; });
// }

// function createArrayForPullBackTwo (size) {
// 	return _.map(new Array(size), function(item, index){ return  (9*index)+7; });
// }

function createArrayForPullBack (size, rule) {
	return _.map(new Array(size), function(item, index){ return  (9*index)+(typeof rule==='number'?rule:0); });
}

export default Ember.Component.extend({
	classNames: ['app_container','grid_view'],
	init(){
		this._super(...arguments);
		this.set('mediaQueries', config.mediaQueries);
		this.mediaQueries.screen_md['pullBackOneElements'] = createArrayForPullBack(10,7);
		this.mediaQueries.screen_lg['pullBackOneElements'] = this.mediaQueries.screen_xlg['pullBackOneElements'] = createArrayForPullBack(20,4);
		this.mediaQueries.screen_lg['pullBackTwoElements'] = this.mediaQueries.screen_xlg['pullBackTwoElements'] = createArrayForPullBack(20,7);
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
				console.log(width);
				return width >= mq.value; 
			});
		return breakPoint ? breakPoint : _.find(this.mediaQueries, function(mq){ return mq; });
	})
});
