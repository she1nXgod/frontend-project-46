import fs from 'fs';
import * as path from 'path';

export default (filepath) => {
  const readFile = fs.readFileSync(path.resolve(process.cwd(), filepath));
  return JSON.parse(readFile);
};
