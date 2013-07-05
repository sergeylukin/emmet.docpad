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
  // Don't remove any files that were combined
  // If set to TRUE, then any dependencies from
  // bower_components will be removed as well
  // which is not fatal because we can always run
  // bower install again but it's annoying to do so
  // after every build, so let's just not remove those files
  removeCombined: false,
  // We don't want to optimize anything except modules
  skipDirOptimize: true
})
