import {resolve} from 'path'
import { INVALID_INPUT } from '../../constants/base.js'

export async function goToPath(currentDir, dir) {
  const path = resolve(currentDir, dir)
  
  try {
    process.chdir(path)
  } catch {
    console.error(INVALID_INPUT)
  }
}