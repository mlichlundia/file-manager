import { INVALID_INPUT, OPERATION_FAILD } from "../../constants/base.js";
import { resolve } from 'path'
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { isFile } from "../base/isFile.js";

const compress = async (currentDir, file, archFile) => {
    if(!currentDir || !file || !archFile) {
        console.error(INVALID_INPUT)
        return
    }

    const path = resolve(currentDir, file)
    const archPath = resolve(currentDir, archFile)

    if(!await (isFile(path) || isFile(archPath))) {
        return
    }

    const readStream = createReadStream(path)
    const writeStream = createWriteStream(archPath)
    const brotliStream = createBrotliCompress();

    readStream.pipe(brotliStream).pipe(writeStream).on('error', () => {
        console.error(OPERATION_FAILD)
    })

    await new Promise((resolve) => readStream.on('close', () => resolve()))
};

export { compress };