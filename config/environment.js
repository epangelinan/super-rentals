/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'super-rentals',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      apiKey: 'AIzaSyDVHVRvBt1m48gcDSyFpeFOwG5siuZY5sg',
      authDomain: 'super-rentals-4dc86.firebaseapp.com',
      databaseURL: 'https://super-rentals-4dc86.firebaseio.com',
      storageBucket: 'super-rentals-4dc86.appspot.com'
    },


// <script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "super-rentals-4dc86",
//     storageBucket: "",
//     messagingSenderId: "1083435141423"
//   };
//   firebase.initializeApp(config);
// </script>


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
