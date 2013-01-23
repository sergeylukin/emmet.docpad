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
      outPath: "out-dev"
    static:
      outPath: "out-prod"

}

# Export the Configuration
module.exports = docpadConfig
