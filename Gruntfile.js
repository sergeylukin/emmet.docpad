/*global module:false*/

module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
      },
      // Switch to dist directory and push it to remote
      deploy: {
        command: 'cd ./dist' +
                // Save current remote URL in variable
                 ' && target_repo=`git config remote.origin.url`' +
                 ' && git init' +
                 ' && git add .' +
                 " && git commit -m'build'" +
                // Push commit to URL saved in variable
                 ' && git push $target_repo master:master --force' +
                 ' && rm -fr .git' +
                // Return back like nothing happened :)
                 ' && cd ../' +
                 '',
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

  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-exec');

  // Default task.
  grunt.registerTask('default', ['jshint', 'exec:docpad', 'requirejs', 'usemin']);
  grunt.registerTask('deploy', ['default', 'exec:deploy']);

};
