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

- Run `grunt` and everything will be built into `./dist` directory.


How to develop
--------------

- Install dependencies `npm install`

- Activate watch/server process with `docpad run` and open
  `http://localhost:9778`

- Activate lintint/testing with `grunt watch`

- Develop in `./src` directory and receive immediate feedback in the
  Browser and in the Terminal


TODO
----

- instead of replacing script tags with Grunt in preprocessed HTML,
  replace them with Docpad plugin in layouts before preprocessing is done
  with docpad plugin
