import readline from 'node:readline/promises'
import { commands } from './constants/commands.js';
import { getUsername } from './utils/base/getUsername.js';
import { greetings } from './utils/base/greetings.js';
import { farewell } from './utils/base/farewell.js';

const rl = readline.createInterface(process.stdin, process.stout)

getUsername()
greetings()

rl.on('line', (command) => {
  if(command === commands.exit) {
    rl.close();
    farewell()
    return
  }

  console.log(command)
})

process.on('SIGINT', () => {
  farewell()
  process.exit();
})