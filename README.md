What I want from my project:

- Assets (Coffee, Sass) compilation, HTML generation and LiveReload on file save
- Minification, concatenation with update in HTML file by `build` command
- Overwrite **master** branch's content with build folder and push to remote on
  `deploy` command
- Source be in **source** branch

How to build:
-------------

- Install dependencies `npm install`

- Run `grunt` and everything will be built into `./dist` directory.

How to develop:
---------------


- Install dependencies `npm install`

- Activate watch/server process with `docpad run` and open
  `http://localhost:9778`

- Activate lintint/testing with `grunt watch`

- Develop in `./src` directory and receive immediate feedback in the
  Browser and in the Terminal

