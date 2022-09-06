const readline = require('readline-sync')
function start() {
  const videoTheme = {}

  videoTheme.searchTerm = askAndReturnSearchTerm()
  videoTheme.prefix = askAndReturnPrefix()

  function askAndReturnSearchTerm() {

    return readline.question('Type a search term: ')

  }
  function askAndReturnPrefix(){

  const prefixes = ["Who is", "What Is", "The history of"]
  const selectedPrefixIndex = readline.keyInSelect(prefixes, "Choose one option:")
  const selectedPrefixText = prefixes[selectedPrefixIndex]

  return selectedPrefixText
  }
    console.log(videoTheme.prefix + " " + videoTheme.searchTerm)
  }
start()
