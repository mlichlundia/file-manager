import { resolve } from 'path';
import { appendFile } from 'node:fs/promises';
import { OPERATION_FAILD } from '../../constants/base.js';

const create = async (currentDir, file) => {
    const path = resolve(currentDir, file)

    try {
        await appendFile(path, '')
    } catch (error){
        console.error(OPERATION_FAILD)
    }
};

export { create };