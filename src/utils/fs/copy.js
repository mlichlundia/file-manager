import { resolve } from 'path';
import { INVALID_INPUT, OPERATION_FAILD } from '../../constants/base.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { isFile } from '../base/isFile.js';

const createFileCopyName = (file) => {
    const fileNameArr = file.slice(file.indexOf('/') + 1 || 0, ).split('.')
    const fileCopy = '/' + fileNameArr[0] + '_copy' + '.' +  fileNameArr[1]

    return fileCopy
}

const copy = async (currentDir, file, target) => {
    if(!currentDir || !file || !target) {
        console.error(INVALID_INPUT)
        return
    }

    const path = resolve(currentDir, file)
    const targetPath = resolve(currentDir, target)

    if(!isFile(path)) {
        return
    }

    const readStream = createReadStream(path)
    const writeStream = createWriteStream(targetPath + createFileCopyName(file))

    readStream.pipe(writeStream).on('error', () => console.error(OPERATION_FAILD))

    await new Promise((resolve) => readStream.on('close', () => resolve()))
};

export { copy };
