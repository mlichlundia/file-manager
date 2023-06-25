import readline from 'node:readline/promises'
import { commands } from './constants/commands.js';
import { getUsername } from './utils/base/getUsername.js';
import { greetings } from './utils/base/greetings.js';
import { farewell } from './utils/base/farewell.js';
import { getCurrentPath } from './utils/base/getCurrentPath.js';
import { logHomeDir } from './utils/base/logHomeDir.js';
import { INVALID_INPUT, PROMPT_MESSAGE } from './constants/base.js';
import { read } from './utils/fs/read.js';

const rl = readline.createInterface(process.stdin, process.stdout)

getUsername()
greetings()
logHomeDir()
rl.setPrompt(PROMPT_MESSAGE)
rl.prompt()

rl.on('line', async(command) => {
  if(command === commands.exit) {
    rl.close();
    farewell()
    return
  }

  await execCommand(command.trim())
  showPromt()
})

rl.on('SIGINT', () => {
  farewell()
  process.exit();
})

async function execCommand(command) {
  const params = command.split(' ').slice(1, )

  if(command.startsWith(commands.fs.read)) {
    await read(getCurrentPath(import.meta.url), params[0])
  } else {
    console.error(INVALID_INPUT)
  }
}

function showPromt() {
  console.log(`\nYou are currently in ${getCurrentPath(import.meta.url)}\n`)
  rl.prompt()
}