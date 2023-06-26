import {userInfo} from 'os'

export async function getSystemUsername() {
  console.log(userInfo().username)
} 