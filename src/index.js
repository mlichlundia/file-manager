import readline from 'node:readline/promises'
import { commands } from './constants/commands.js';
import { getUsername } from './utils/base/getUsername.js';
import { greetings } from './utils/base/greetings.js';
import { farewell } from './utils/base/farewell.js';
import { getCurrentPath } from './utils/base/getCurrentPath.js';
import { logHomeDir } from './utils/base/logHomeDir.js';
import { INVALID_INPUT, PROMPT_MESSAGE } from './constants/base.js';
import { read } from './utils/fs/read.js';
import { create } from './utils/fs/create.js';
import { rename } from './utils/fs/rename.js';
import { copy } from './utils/fs/copy.js';
import { move } from './utils/fs/move.js';
import { remove } from './utils/fs/delete.js';
import { getEOL } from './utils/os/eol.js';
import { getCpusInfo } from './utils/os/cpus.js';

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
  } else if(command.startsWith(commands.fs.create)) {
    await create(getCurrentPath(import.meta.url), params[0])
  } else if(command.startsWith(commands.fs.rename)) {
    await rename(getCurrentPath(import.meta.url), params[0], params[1])
  } else if(command.startsWith(commands.fs.copy)) {
    await copy(getCurrentPath(import.meta.url), params[0], params[1])
  } else if(command.startsWith(commands.fs.move)) {
    await move(getCurrentPath(import.meta.url), params[0], params[1])
  } else if(command.startsWith(commands.fs.delete)) {
    await remove(getCurrentPath(import.meta.url), params[0])
  } else if(command === commands.os.eol) {
    await getEOL()
  } else if(command === commands.os.cpus) {
    await getCpusInfo()
  } else {
    console.error(INVALID_INPUT)
  }
}

function showPromt() {
  console.log(`\nYou are currently in ${getCurrentPath(import.meta.url)}\n`)
  rl.prompt()
}