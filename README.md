What do I expect from this project
----------------------------------

- **DONE** Pre-process HTML,JS,CSS on files save
- **DONE** Lint JS, CSS on files save
- **DONE** Have modular front-end JavaScript using RequireJS
- **DONE** Lint, Concatenate, Minify + update HTML markup if necessary on `grunt` command
- **DONE** Push optimized website to Github pages on `grunt deploy:gh` command
- **DONE** Revision static file assets according to their content, so instead of
  `main.js` have something like `9bec739.main.js`
- **DONE** Manage vendor libraries with bower
- Have TDD workflow in place
- Have an option to upload assets to CDN and update HTML accordingly on `grunt build`
- Add support for Browserify
- Add custom JS/CSS assets per page via YAML front matter


Important
---------

You need Grunt v0.4 or later installed. If you have older version:

- Uninstall old grunt package: `npm uninstall -g grunt`

- Install new one: `npm install -g grunt-cli`


How to build
------------

- Install [git](http://git-scm.com/) (optional) and [node (with npm)](http://nodejs.org/)

- Install Grunt and Bower: `npm install -g grunt-cli bower docpad`

- Clone the skeleton `git clone https://github.com/sergeylukin/emmet.docpad.git` or [download archive](https://github.com/sergeylukin/emmet.docpad/archive/source.zip)

- Switch to the source branch `git checkout source`

- CD into cloned/extracted directory and install skeleton dependencies `npm install` and `bower install`

- Build with `grunt` (production-ready project will be built into `./dist`
  directory)


How to develop
--------------

Follow "How to build" steps above and instead of running `grunt` command, do
following:

- Activate watch/server process with `docpad run` and open
  `http://localhost:9778`

- Activate lintint/testing with `grunt watch`

- Develop in `./src` directory and receive immediate feedback in the
  Browser and in the Terminal

Using vendor library
--------------------

For example you need `jQuery`. Do following:

- `bower install jquery --save` to install the component and add it to the
  `bower.json`

- In `scripts/main.js` or any other stand-alone script do something like:

  ```
  require(['jquery'], function($) {
    console.log('Here you go, we have jquery available: ' + $);
  });
  ```

Next time you run `grunt` all will be bundled together in proper order and
minified - what can be better?



How build process works
-----------------------

- When you execute `docpad generate` or `docpad run` docpad generates
  development (unoptimized) version of app to `.tmp` directory

- When you execute `grunt`, few things happen:

  1. Docpad generates staging version of app (without dev plugins, like
     LiveReload etc.) to `.tmp.stage` directory
  2. RequireJS optimizer takes staging files and crunches them into `dist`
     directory.
  3. Staging directory is removed - you end up with `.tmp` and `dist`
     directories

  Now, of course there are some other tasks in the middle of these processes,
  better look into `Gruntfile.js` to get the exact picture

Things to improve
-----------------

- instead of replacing script tags with `grunt-usemin` in preprocessed HTML,
  replace them with Docpad plugin in layouts before preprocessing is done -
  this will boost up the performance of `grunt` command as it may take some
  time to parse all generated HTML files in distribution directory..
- **DONE** Move `src/files/scripts/vendor/require.js` to bower and use it from there
