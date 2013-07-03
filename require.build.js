({ 
  ////
  // Specify directories paths below
  // Note: this file will be copied from **project_dir/src/files/scripts/**
  //    to **project_dir/dist/scripts/** so all paths below are relative to
  //    the latter
  //
  // dir is relative to current file
  dir: "./dist", 
  // appDir is relative to current file
  appDir: "./.tmp.stage", 
  // baseUrl is relative to appDir
  baseUrl: "./scripts", 
  // mainConfigFile is relative to current file
  // keep all the paths and common stuff in one file
  mainConfigFile: './.tmp.stage/scripts/main.js',

  ////
  // Specify CSS build options below
  optimizeCss: "standard",

  ////
  // Specify JS and general build options below
  //
  optimize: 'uglify',
  // Remove any files that were combined
  removeCombined: true,
  // We don't want to optimize anything except modules
  skipDirOptimize: true,
  modules: [
    {
      name: 'main',
      include: ['almond']
    },

    {
      name: 'charts',
      exclude: [ 'main' ]
    }
  ]
})
