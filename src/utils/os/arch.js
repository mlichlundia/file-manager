import {arch} from 'os'

export async function getOSArch() {
  console.log(arch())
}