const readline = require('readline-sync')
function robot(videoContent){
  videoContent.searchTerm = askAndReturnSearchTerm()
  videoContent.prefix = askAndReturnPrefix()
    function askAndReturnSearchTerm() {

      return readline.question('Type a search term: ')

    }
    function askAndReturnPrefix(){

      const prefixes = ["Who is", "What Is", "The history of"]
      const selectedPrefixIndex = readline.keyInSelect(prefixes, "Choose one option:")
      const selectedPrefixText = prefixes[selectedPrefixIndex]

      return selectedPrefixText
    }
}

module.exports = robot
