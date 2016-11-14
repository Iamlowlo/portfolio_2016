/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'portfolio-2016',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    mediaQueries : {
      screen_sm : {
        name: 'screen_sm',
        value: '375'
      },
      screen_md : {
        name: 'screen_md',
        value: '736'
      },
      screen_lg : {
        name: 'screen_lg',
        value: '1200'
      },
      screen_xlg : {
        name: 'screen_xlg',
        value: '1600'
      }},
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
