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
      outPath: "tmp"
    production:
      outPath: "tmp.stage"

}

# Export the Configuration
module.exports = docpadConfig
