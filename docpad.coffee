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
        bowermount:
          excludes: ['live-reload-socket-io']
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

  events:
    # Add page-specific JavaScript references
    # TODO: replace with more native solution when this question will be
    # answered: http://stackoverflow.com/questions/17605108/
    render: (opts) ->
      {inExtension,outExtension,templateData,file,content} = opts
      if outExtension == 'html' and scripts = file.get('scripts')
        if typeof scripts != 'undefined'
          scriptBlock = ''
          scripts.forEach (scriptName) ->
            scriptBlock = """
                \n    <!-- build:js /scripts/#{scriptName}.js-->
                    <script>require(['charts'])</script>
                    <!-- endbuild-->
                """

          templateData.scripts = scriptBlock
}

# Export the Configuration
module.exports = docpadConfig
