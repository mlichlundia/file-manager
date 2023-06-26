import { readdir } from "fs/promises";

export async function listDir() {
  const list = (await readdir(process.cwd(), { withFileTypes: true }))
  .map(item => ({name: item.name, type: (item.isDirectory() ? 'directory' : 'file')}))


  const dirs = list.filter(item => item.type === 'directory').sort((a, b) => a.name - b.name)
  const files = list.filter(item => item.type !== 'directory').sort((a, b) => a.name - b.name)
  
  const result = [...dirs, ...files]

  console.table(result, ['name', 'type'])
}