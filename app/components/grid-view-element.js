import Ember from 'ember';
import _ from 'lodash/lodash';

const gridViewElement = Ember.Component.extend({
	tagName: 'li',
	classNames: ['grid_view-element'],
	attributeBindings: ['style'],
	style: Ember.computed('order', function(){
		return 'order: ' + this.get('order');
	}),
	order: Ember.computed('breakPoint', function(){
		var order = this.feedIndex,
			breakPoint = this.get('breakPoint');
		if (breakPoint) {
			if (breakPoint.pullBackOneElements && _.includes(breakPoint.pullBackOneElements, this.feedIndex+1)) {
				order+=2;
			}
			if (breakPoint.pullBackTwoElements && _.includes(breakPoint.pullBackTwoElements, this.feedIndex+1)) {
				order+=3;
			}
		}
		return order;
	})
});

gridViewElement.reopenClass({
	positionalParams: ['feedItem', 'feedIndex', 'breakPoint']
});

export default gridViewElement;