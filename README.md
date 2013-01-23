What do I expect from this project
----------------------------------

- **DONE** Pre-process, Lint HTML,JS,CSS on files save
- Lint JS, CSS + Run tests on files save
- **DONE** Have modular front-end JavaScript using RequireJS
- **DONE** Lint, Test, Concatenate, Minificate + update HTML markup if necessary on `build`
- Push optimized build to any remote branch on `deploy`

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
