define(['modules/foo'], function(foo) {
  return {
    init: function() {
      console.log('Tab module loaded');
      foo.init();
    }
  };
});
