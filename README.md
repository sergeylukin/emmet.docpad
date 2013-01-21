What I want from my project:

- Assets (Coffee, Sass) compilation, HTML generation and LiveReload on file save
- Minification, concatenation with update in HTML file by `build` command
- Overwrite **master** branch's content with build folder and push to remote on
  `deploy` command
- Source be in **source** branch

How to use:
-----------

`npm install`

This will generate static files in **out** directory:

`docpad generate`

This will build optimized files in **build** directory:

`./node_modules/requirejs/bin/r.js -o out/scripts/require.build.js`

