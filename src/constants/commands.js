export const commands = {
  navigation: {
    up: 'up',
    cd: 'cd',
    ls: 'ls'
  },
  fs: {
    read: 'cat',
    create: 'add',
    rename: 'rn',
    copy: 'cp',
    move: 'mv',
    delete: 'rm'
  },
  os: {
    eol: 'os --EOL',
    cpus: 'os --cpus',
    homedir: 'os --homedir',
    username: 'os --username',
    architecture: 'os --architecture',    
  },
  hash: 'hash',
  zip: {
    compress: 'compress',
    decompress: 'decompress'
  },
  exit: '.exit'
}