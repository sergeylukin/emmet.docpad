// The build will inline common dependencies into this file
require.config({
  baseUrl: '/scripts',
  paths: {
    'live-reload-socket-io': '../socket.io/socket.io',
    'hbs': '../../bower_components/require-handlebars-plugin/hbs',
    // require-handlebars-plugin doesn't work well if not loading following
    // files from it's directory
    'handlebars': '../../bower_components/require-handlebars-plugin/Handlebars',
    'json2': '../../bower_components/require-handlebars-plugin/hbs/json2',
    'i18nprecompile': '../../bower_components/require-handlebars-plugin/hbs/i18nprecompile'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  },
  hbs: {
    disableI18n : true
  },
  modules: [
    {
      name: 'main',
      include: ['requirejs']
    },

    {
      name: 'charts',
      exclude: [ 'main' ]
    }
  ]
});

// Bootstrap the app here
require(['modules/app'], function(App) {
  App.initialize();
});
