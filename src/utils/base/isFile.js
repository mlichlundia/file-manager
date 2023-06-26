import { stat } from 'node:fs/promises';
import { INVALID_INPUT } from '../../constants/base.js';

export async function isFile(path) {
  let statFile
  
  try {
    statFile = await stat(path, () => {
      console.error(INVALID_INPUT)
  })} catch (err) {
    console.error(INVALID_INPUT)
    return false
  }

  if(!statFile?.isFile()) {
      console.error(INVALID_INPUT)
      return false
  }

  return true
}