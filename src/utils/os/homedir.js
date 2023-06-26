import path from 'path';

export async function logHomeDir() {
  const systemDrive = process.env.SystemDrive;
  const username = process.env.USERNAME;

  console.log(path.join(systemDrive, 'Users', username))
};