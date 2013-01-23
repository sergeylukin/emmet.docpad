What I want from my project:

- Assets (Coffee, Sass) compilation, HTML generation and LiveReload on file save
- Minification, concatenation with update in HTML file by `build` command
- Overwrite **master** branch's content with build folder and push to remote on
  `deploy` command
- Source be in **source** branch

How to use:
-----------

`npm install`

`docpad run`

`grunt watch`

do your work in **src** directory and enjoy livereload at `localhost:9778`

when done execute:

`docpad generate --env static`

and:

`grunt`

Then you can deploy **dist** directory
