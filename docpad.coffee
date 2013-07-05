# Define the Configuration
docpadConfig = {
  templateData:
    site:
      title: "My Webzite"
  ignorePatterns: true
  ignoreCustomPatterns: /^_.+\.styl$/i

  # =================================
  # Environments
  environments:
    development:
      outPath: ".tmp"
      plugins:
        livereload:
          populateCollections: false
    # Because we utilize Grunt for optimization processed
    # docpad's static build is a staging one before Grunt
    static:
      outPath: ".tmp.stage"
  # =================================
  # Plugins
  plugins:
    jade:
      jadeOptions:
        pretty: true
}

# Export the Configuration
module.exports = docpadConfig
