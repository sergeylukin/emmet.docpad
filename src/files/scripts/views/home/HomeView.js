define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'hbs!templates/home/homeTemplate'
], function($, _, Backbone, SidebarView, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){

      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate({}));

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return HomeView;
  
});
