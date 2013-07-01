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
    # Because we utilize Grunt for optimization processed
    # docpad's static build is a staging one before Grunt
    static:
      outPath: ".tmp.stage"

}

# Export the Configuration
module.exports = docpadConfig
