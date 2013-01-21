({ 
  ////
  // Specify directories paths below
  // Note: this file will be copied from **project_dir/src/files/scripts/**
  //    to **project_dir/out/scripts/** so all paths below are relative to
  //    the latter
  //
  // dir is relative to current file
  dir: "../../build", 
  // appDir is relative to current file
  appDir: "../", 
  // baseUrl is relative to appDir
  baseUrl: "./scripts", 
  // mainConfigFile is relative to current file
  // keep all the paths and common stuff in one file
  mainConfigFile: 'require.config.js',

  ////
  // Specify build options below
  //
  optimize: 'none',
  // Remove any files that were combined
  removeCombined: true,
  // We don't want to optimize anything except modules
  skipDirOptimize: true,
  modules: [
    {
      name: 'main'
    }
  ],
})
