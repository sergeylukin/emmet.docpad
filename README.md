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

- Install dependencies `npm install`

- Install vendor components `bower install`

- Run `grunt` and production-ready version will be built into `./dist` directory.


How to build (detailed version)
-------------------------------

Install [git](http://git-scm.com/) and [node (with npm)](http://nodejs.org/) then run in a terminal:

```bash
    git clone https://github.com/sergeylukin/emmet.docpad.git
    # or if you want default jade template instead of eco template :
    git clone https://github.com/gammanu/jade.emmet.docpad.git
    # Install dependencies
    npm install
    # Install vendor components `bower install` or
    node_modules/bower/bin/bower install
    # if you don't have bower in $PATH.
    # then run `grunt` to build a production-ready version into `./dist` directory or
    node_modules/grunt-cli/bin/grunt
    # if you don't have grunt in $PATH.
```

How to develop
--------------

- Install dependencies `npm install`

- Install vendor components `bower install`

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
