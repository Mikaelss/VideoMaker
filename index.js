const readline = require('readline-sync')
const robots =  {
  userInput: require("./robots/user-input.js"),
}

function start() {
  const videoContent = {}

  robots.userInput(videoContent)

    console.log(videoContent)
  }

start()
