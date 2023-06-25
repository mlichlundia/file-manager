import path from 'path';
import { fileURLToPath } from 'url';

export function getCurrentPath(url) {
  const fileName = fileURLToPath(url);

  return path.dirname(fileName)
}