// The build will inline common dependencies into this file
require.config({
  baseUrl: '/scripts',
  paths: {
  },
  shim: {
    'vendor/foo': [ 'vendor/bar' ]
  }
});

// Bootstrap the app here
require(['modules/app'], function(App) {
  App.init();
});
