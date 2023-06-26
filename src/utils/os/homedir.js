import { getHomedir } from '../base/getHomedir.js';

export async function logHomeDir() {
  console.log(getHomedir())
};