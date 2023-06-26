import { resolve } from 'path';
import { readFile } from 'node:fs/promises';
import { INVALID_INPUT } from '../../constants/base.js';
import { isFile } from '../base/isFile.js';

const { createHash } = await import('node:crypto');

const calculateHash = async (currentDir, file) => {
  if(!currentDir || !file) {
    console.error(INVALID_INPUT)
    return
  }

  const path = resolve(currentDir, file)

  if(!await isFile(path)) {
    return
  }

  const fileContent = await readFile(path)
  const hash = createHash('sha256')
  const result = hash.update(fileContent).digest('hex')
    
  console.log(result)
};

export { calculateHash };