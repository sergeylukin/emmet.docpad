/*global module:false*/

module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      dev: ['.tmp/scripts/*.js', '.tmp/scripts/modules/**/*.js'],
      stage: ['.tmp.stage/scripts/*.js', '.tmp.stage/scripts/modules/**/*.js'],
      
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
        src: '.tmp/styles/main.css',
        rules: {
          import: false,
          'universal-selector': false
        }
      },
      stage: {
        src: '.tmp.stage/styles/main.css',
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
      stage: [".tmp.stage"],
      // After RequireJS optimizes staging files it leaves all the original
      // files untouched. So instead of letting it delete automatically and
      // trying to preserve files we don't want to delete, we can
      // manually tweak it like we do it here
      //
      // More details on:
      // https://github.com/sergeylukin/emmet.docpad/commit/d0b4265e8b4dc8dd364e69059512220868892ff3
      js_prod: ["dist/scripts/modules", "dist/scripts/vendor"],
      // same for stylesheets
      css_prod: ["dist/styles/reset.css"]
    },

    exec: {
      // Generate staging files (not optimized, but after preprocessing)
      // In docpad, static is used for production ready build
      // We use it as a pre-production build (staging), but
      // still environment name for docpad is "static"
      //
      // TODO: replace this with docpad wrapper using docpad API
      //
      docpad_stage: {
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

    // Rename asset files to include content's hash in filenames
    // For example: main.js -> 9e34vn.main.js
    rev: {
      dist: {
        files: {
          src: [
            './dist/scripts/{,*/}*.js',
            './dist/styles/{,*/}*.css',
            './dist/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            './dist/styles/fonts/*'
          ]
        }
      }
    },

    // Replace HTML markup blocks
    usemin: {
      html: ['./dist/**/*.html']
    },

    // Set paths for bower components in RequireJS configuration file
    bower: {
      stage: {
        rjsConfig: './.tmp.stage/scripts/main.js'
      }
    }

  });

  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-bower-requirejs');

  // Default task - results in ready to deploy production website
  grunt.registerTask('default', [

                                 'clean:stage', // delete old staging files
                                 'exec:docpad_stage', // generate staging files
                                 'jshint:stage', // validate JS in staging directory
                                 'csslint:stage', // validate CSS in staging directory

                                 // Add bower components path to RequireJS
                                 'bower:stage',

                                 'requirejs', // optimize staging files to
                                              // distribution directory

                                 'clean:js_prod', // clean unused JS files
                                 'clean:css_prod', // clean unused CSS files

                                 // Revision assets
                                 'rev',

                                 'usemin', // update HTML markup references
                                           // in distribution directory

                                 // ..and finally..
                                 'clean:stage' // ..delete staging files
                                 // voila! we're done, now I only need `grunt cup:coffee`
                                ]);
  // Deploys production website to Github pages
  grunt.registerTask('deploy:gh', ['default', 'exec:deploy_ghpages']);

};
