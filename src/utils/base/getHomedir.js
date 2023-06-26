import path from 'path';

export function getHomedir() {
  const systemDrive = process.env.SystemDrive;
  const username = process.env.USERNAME;

  return path.join(systemDrive, 'Users', username)
}