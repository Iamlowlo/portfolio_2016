import Ember from 'ember';
import _ from 'lodash/lodash';

export function lodashIncludes(params) {
  return _.includes(params[0], params[1]);
}

export default Ember.Helper.helper(lodashIncludes);
