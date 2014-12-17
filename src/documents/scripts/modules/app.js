define(['modules/tab'], function(Tab) {
  return {
    firstname: "Lorem",
    lastname: "Ipsum",
    init: function() {
      console.log('App is initialized');
      Tab.init();
    }
  };
});
