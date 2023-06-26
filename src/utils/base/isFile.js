import { statSync } from 'node:fs';
import { INVALID_INPUT } from '../../constants/base.js';

export function isFile(path) {
  const stat = statSync(path, () => {
      console.error(INVALID_INPUT)
  })

  if(!stat.isFile()) {
      console.error(INVALID_INPUT)
      return false
  }

  return true
}