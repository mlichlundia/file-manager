import {cpus} from 'os'

export async function getCpusInfo() {
  const amount = cpus().length
  const list = cpus().reduce((result, cpu) => result += `\nmodel: ${cpu.model}\nclock rate: ${cpu.speed}Hz\n`, '')
  
  console.log(`amount: ${amount}\n\n`,list)
}