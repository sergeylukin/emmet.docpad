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

    exec: {
      // Clean old dir and generate new production version of docpad website
      docpad: {
        command: 'rm -fr out-prod && docpad generate --env static',
        stdout: true
      }
    },

    usemin: {
      html: ['./dist/**/*.html']
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
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-exec');

  // Default task.
  grunt.registerTask('default', 'lint exec:docpad requirejs usemin');

};
