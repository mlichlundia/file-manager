export const commands = {
  navigation: {
    up: 'up',
    cd: 'cd',
    ls: 'ls'
  },
  fs: {
    read: 'cat path_to_file',
    create: 'add new_file_name',
    rename: 'rn path_to_file new_filename',
    copy: 'cp path_to_file path_to_new_directory',
    move: 'mv path_to_file path_to_new_directory',
    delete: 'rm path_to_file'
  },
  os: {
    eol: 'os --EOL',
    cpus: 'os --cpus',
    homedir: 'os --homedir',
    username: 'os --username',
    architecture: 'os --architecture',    
  },
  hash: 'hash path_to_file',
  zip: {
    compress: 'compress path_to_file path_to_destination',
    decompress: 'decompress path_to_file path_to_destination'
  }
}