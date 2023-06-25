import { resolve } from 'path';
import { rename as fsRename } from 'node:fs/promises';
import { OPERATION_FAILD } from '../../constants/base.js';

const rename = async (currentDir, oldName, newName) => {
    if(!currentDir || !oldName || !newName) {
        console.error(OPERATION_FAILD)
        return
    }

    const targetPath = resolve(currentDir, oldName)
    const replacePath = resolve(currentDir, newName)

    try {
        await fsRename(targetPath, replacePath)
    } catch {
        console.error(OPERATION_FAILD)
    }
};

export { rename };