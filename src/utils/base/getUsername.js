export let username

export function getUsername() {
  const prefix = '--'
  const usernameArg = process.argv.find(arg => arg.startsWith(prefix))
  
  username = usernameArg?.slice(usernameArg.indexOf('=') + 1, ) || 'Username' 
}