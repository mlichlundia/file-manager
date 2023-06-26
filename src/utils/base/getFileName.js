export function getFileName(path) {
  const filePathArr = path.split('/')
  return filePathArr[filePathArr.length - 1]
}