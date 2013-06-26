/*global module:false*/

module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      dev: ['tmp/scripts/*.js', 'tmp/scripts/modules/**/*.js'],
      stage: ['tmp.stage/scripts/*.js', 'tmp.stage/scripts/modules/**/*.js'],
      
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
          define: true,
          console: true
        }
      },

    },

    csslint: {
      dev: {
        src: 'tmp/styles/main.css',
        rules: {
          import: false,
          'universal-selector': false
        }
      },
      stage: {
        src: 'tmp.stage/styles/main.css',
        rules: {
          import: false,
          'universal-selector': false
        }
      }
    },

    watch: {
      scripts: {
        files: '<%= jshint.dev %>',
        tasks: ['jshint:dev']
      },
      styles: {
        files: '<%= csslint.dev.src %>',
        tasks: ['csslint:dev']
      }
    },

    clean: {
      stage: ["tmp.stage"]
    },

    exec: {
      // Generate new development version of docpad website
      docpad_dev: {
        command: 'docpad generate --env development',
        stdout: true
      },
      // Generate staging files (not optimized, but after preprocessing)
      docpad_stage: {
        command: 'docpad generate --env stage',
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
    },

  });

  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-exec');

  // Default task - results in ready to deploy production website
  grunt.registerTask('default', [

                                 // You should manually run `docpad generate`
                                 // or `docpad run` before following tasks will
                                 // run successfully!
                                 //
                                 // The reason why you should do it manually is
                                 // that I couldn't make it work from the
                                 // Grunt,
                                 // if you succeed - let me know

                                 'clean:stage', // delete old staging files
                                 'exec:docpad_stage', // generate staging files
                                 'jshint:stage', // validate JS in staging directory
                                 'csslint:stage', // validate CSS in staging directory

                                 'requirejs', // optimize staging files to
                                              // distribution directory
                                 'usemin', // update HTML markup references
                                           // in distribution directory

                                 // ..and finally..
                                 'clean:stage' // ..delete staging files
                                 // voila! we're done, now I only need `grunt cup:coffee`
                                ]);
  // Deploys production website to Github pages
  grunt.registerTask('deploy:gh', ['default', 'exec:deploy_ghpages']);

};
