define([
  'backbone',
  'views/home/HomeView'
], function(Backbone, HomeView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/projects': 'showProjects',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){

    var app_router = new AppRouter();

    app_router.on('route:defaultAction', function(actions){
      var homeView = new HomeView();
      homeView.render();
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
