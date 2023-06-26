import { stat } from 'node:fs/promises';
import { INVALID_INPUT } from '../../constants/base.js';

export async function isFile(path) {
  let statFile
  
  try {
    statFile = await stat(path, () => {
      console.error(INVALID_INPUT, 1)
  })} catch (err) {
    console.error(INVALID_INPUT, 2)
    return false
  }

  if(!statFile?.isFile()) {
      console.error(INVALID_INPUT, 3)
      return false
  }

  return true
}