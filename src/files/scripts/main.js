// Set configuration for optimi
requirejs.config({
  optimize: 'uglify',
  name: 'main',
  include: 'requireLib',
  out: 'require.js',
  paths: {
    requireLib: 'lib/require'
  }
});

require(['modules/person'], function(person) {
  console.log(person.firstname + ' ' + person.lastname);
});
