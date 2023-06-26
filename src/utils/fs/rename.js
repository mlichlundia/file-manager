import { resolve, dirname } from 'path';
import { rename as fsRename } from 'node:fs/promises';
import { INVALID_INPUT, OPERATION_FAILD } from '../../constants/base.js';

const rename = async (currentDir, oldName, newName) => {
    if(!currentDir || !oldName || !newName) {
        console.error(INVALID_INPUT)
        return
    }

    const targetPath = resolve(currentDir, oldName)
    const replacePath = resolve(dirname(targetPath), newName)

    try {
        await fsRename(targetPath, replacePath)
    } catch {
        console.error(OPERATION_FAILD)
    }
};

export { rename };