import readline from 'node:readline/promises'
import { commands } from './constants/commands.js';
import { getUsername } from './utils/base/getUsername.js';
import { greetings } from './utils/base/greetings.js';
import { farewell } from './utils/base/farewell.js';
import { getCurrentPath } from './utils/base/getCurrentPath.js';
import { logHomeDir } from './utils/base/logHomeDir.js';
import { PROMPT_MESSAGE } from './constants/base.js';

const rl = readline.createInterface(process.stdin, process.stdout)

getUsername()
greetings()
logHomeDir()
rl.setPrompt(PROMPT_MESSAGE)
rl.prompt()

rl.on('line', (command) => {
  if(command === commands.exit) {
    rl.close();
    farewell()
    return
  }

  execCommand('my command')
})

rl.on('SIGINT', () => {
  farewell()
  process.exit();
})

function execCommand(command) {
  console.log(`\nYou are currently in ${getCurrentPath(import.meta.url)}`)
  console.log(command)
  rl.setPrompt(PROMPT_MESSAGE)
  rl.prompt()
}