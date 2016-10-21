import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing');
  this.route('front-end-development');
  this.route('graphic-design');
  this.route('photography');
  this.route('section-link', {path: 'section-link/:section_id'});
});

export default Router;
