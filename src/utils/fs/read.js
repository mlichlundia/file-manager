import { resolve } from 'path';
import { createReadStream } from 'node:fs';
import { OPERATION_FAILD } from '../../constants/base.js';

const read = async (currentDir, file) => {
    const path = resolve(currentDir, file)
    const stream = createReadStream(path)

    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
        stream.destroy()
    })

    stream.on('error', () => {
        console.error("\x1b[0m", OPERATION_FAILD)
    })

    await new Promise((resolve) => stream.on('close', () => resolve()))
}; 

export {read};