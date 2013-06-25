/*global module:false*/

module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      dev: ['out-dev/scripts/*.js', 'out-dev/scripts/modules/**/*.js'],
      prod: ['out-prod/scripts/*.js', 'out-prod/scripts/modules/**/*.js'],
      
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
      dev: {
        src: 'out-dev/styles/main.css',
        rules: {
          import: false
        }
      },
      prod: {
        src: 'out-prod/styles/main.css',
        rules: {
          import: false
        }
      }
    },

    watch: {
      scripts: {
        files: '<%= jshint.dev %>',
        tasks: ['jshint']
      },
      styles: {
        files: '<%= csslint.dev.src %>',
        tasks: ['csslint']
      }
    },

    rm: {
      out_prod: {
        dir: 'out-prod'
      }
    },

    exec: {
      // Clean old dir and generate new production version of docpad website
      docpad: {
        command: 'docpad generate --env static',
        stdout: true
      },
      // Switch to dist directory and push it to remote Github repo
      deploy_ghpages: {
        command: 'cd ./dist' +
                // Remove unnecessary stuff
                 ' && rm -f build.txt' +
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

    // Optimize production website
    requirejs: {
      compile: {
        options: eval(grunt.file.read('./require.build.js'))
      }
    },

    // Replace HTML markup blocks
    usemin: {
      html: ['./dist/**/*.html']
    }
  });

  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-rm');

  // Default task - results in ready to deploy production website
  grunt.registerTask('default', [
                                 'rm:out_prod',
                                 'exec:docpad', // generate production to "out-prod"
                                 'jshint:prod', // validate JS
                                 'csslint:prod', // validate CSS
                                 'requirejs', // optimize production to "dist"
                                 'usemin' // update HTML markup references in "dist"
                                ]);
  // Deploys production website to Github pages
  grunt.registerTask('deploy:gh', ['default', 'exec:deploy_ghpages']);

};
