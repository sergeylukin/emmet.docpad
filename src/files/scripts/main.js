
// require.config({
//   paths: {
//     'socket.io': 'socket.io/socket.io'
//   }
// });

require(['modules/person'], function(person) {
  console.log(person.firstname + ' ' + person.lastname);
});
