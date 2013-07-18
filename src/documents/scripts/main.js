// The build will inline common dependencies into this file
require.config({
  baseUrl: '/scripts',
  paths: {
    'live-reload-socket-io': '../socket.io/socket.io'
  },
  shim: {
  },
  modules: [
    {
      name: 'main',
      include: ['almond']
    },

    {
      name: 'charts',
      exclude: [ 'main' ]
    }
  ]
});

// Bootstrap the app here
require(['modules/app'], function(App) {
  App.init();
});
