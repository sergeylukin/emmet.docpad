({ 
  ////
  // Specify directories paths below
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
