import path from 'path';

export function logHomeDir() {
  const systemDrive = process.env.SystemDrive;
  const username = process.env.USERNAME;

  console.log(path.join(systemDrive, 'Users', username) + '\n')
};