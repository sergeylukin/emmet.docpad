/*global module:false*/

module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    jshint: {
      all: ['out-dev/scripts/*.js', 'out-dev/scripts/modules/**/*.js'],
      
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
        browser: true,
        globals: {
          jQuery: true,
          require: true,
          define: true
        }
      },

    },

    csslint: {
      all: {
        src: 'out-dev/styles/main.css',
        rules: {
          import: false
        }
      }
    },

    watch: {
      scripts: {
        files: '<%= jshint.all %>',
        tasks: ['jshint']
      },
      styles: {
        files: '<%= csslint.all.src %>',
        tasks: ['csslint']
      }
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
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-exec');

  // Default task.
  grunt.registerTask('default', ['jshint', 'exec:docpad', 'requirejs', 'usemin']);

};
