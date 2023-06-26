import { resolve } from 'path';
import { INVALID_INPUT, OPERATION_FAILD } from '../../constants/base.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { isFile } from '../base/isFile.js';
import { rm } from 'node:fs/promises';
import { getFileName } from '../base/getFileName.js';

const move = async (currentDir, file, target) => {
    let hasError = false

    if(!currentDir || !file || !target) {
        console.error(INVALID_INPUT, 1)
        return
    }

    const path = resolve(currentDir, file)
    const targetPath = resolve(currentDir, target)

    if(!await (isFile(path) || isFile(targetPath))) {
        return
    }

    const readStream = createReadStream(path)
    const writeStream = createWriteStream(targetPath + '/' + getFileName(file))

    readStream.pipe(writeStream).on('error', () => {
        console.error(OPERATION_FAILD)
        hasError = true
        readStream.close()
    })
    
    await new Promise((resolve) => readStream.on('close', async() => {
        !hasError && await rm(path)
        resolve()
    }))
};

export { move };
