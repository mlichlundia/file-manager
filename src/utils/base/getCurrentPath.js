import path from 'path';

export function getCurrentPath(url) {
  return path.dirname(url)
}