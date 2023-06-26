import { resolve } from 'path';
import { rm } from 'node:fs/promises';
import { INVALID_INPUT, OPERATION_FAILD } from '../../constants/base.js';

const remove = async (currentDir, file) => {
    if(!currentDir || !file) {
        console.error(INVALID_INPUT)
        return
    }

    const path = resolve(currentDir, file)

    try {
        await rm(path)
    } catch (err) {
        console.error(OPERATION_FAILD)
    }
};

export { remove };