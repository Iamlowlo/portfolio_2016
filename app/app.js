import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;
Ember.LinkComponent.reopen({
  attributeBindings: ["style"]
});
App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);
Ember.LinkComponent.reopen({
  attributeBindings: ['data-content']
});

export default App;
