What do I expect from this project
----------------------------------

- **DONE** Pre-process HTML,JS,CSS on files save
- **DONE** Lint JS, CSS on files save
- **DONE** Have modular front-end JavaScript using RequireJS
- **DONE** Lint, Concatenate, Minify + update HTML markup if necessary on `grunt` command
- **DONE** Push optimized website to Github pages on `grunt deploy:gh` command
- Manage vendor libraries with bower
- Have TDD workflow in place
- Have an option to upload assets to CDN and update HTML accordingly on `grunt build`


Important
---------

You need Grunt v0.4 or later installed. If you have older version:

- Uninstall old grunt package: `npm uninstall -g grunt`

- Install new one: `npm install -g grunt-cli`


How to build
------------

- Install dependencies `npm install`

- Run `grunt` and production-ready version will be built into `./dist` directory.


How to develop
--------------

- Install dependencies `npm install`

- Activate watch/server process with `docpad run` and open
  `http://localhost:9778`

- Activate lintint/testing with `grunt watch`

- Develop in `./src` directory and receive immediate feedback in the
  Browser and in the Terminal


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
