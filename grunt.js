/*global module:false*/

module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    lint: {
      files: ['out-dev/scripts/*.js', 'out-dev/scripts/modules/require.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        require: true,
        define: true
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: ['lint']
    },

    // clean: {
    //   folder: 'build'
    // },
    usemin: {
      html: ['./out-prod-min/**/*.html']
    },

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
  grunt.loadNpmTasks('grunt-usemin');
  // grunt.loadNpmTasks('grunt-contrib-mincss');

  // Default task.
  // grunt.registerTask('default', 'clean requirejs mincss');
  grunt.registerTask('default', 'lint requirejs usemin');

};
