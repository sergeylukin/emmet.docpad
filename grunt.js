/*global module:false*/
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    // clean: {
    //   folder: 'build'
    // },

    requirejs: {
      compile: {
        options: eval(grunt.file.read('./require.build.js'))
      }
    }
  });

  //   mincss: {
  //     compile: {
  //       files: {
  //         'www-release/css/style.css': 'www-release/css/style.css',
  //         'www-release/css/bootstrap.css': 'www-release/css/bootstrap.css',
  //         'www-release/css/bootstrap-responsive.css': 'www-release/css/bootstrap-responsive.css'
  //       }
  //     }
  //   }
  // });

  // Load tasks from NPM
  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  // grunt.loadNpmTasks('grunt-contrib-mincss');

  // Default task.
  // grunt.registerTask('default', 'clean requirejs mincss');
  grunt.registerTask('default', 'requirejs');

};
