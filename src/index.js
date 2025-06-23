import fs from 'fs';
import * as path from 'path';

const parseFile = (filepath) => {
  const readFile = fs.readFileSync(path.resolve(process.cwd(), filepath));
  return JSON.parse(readFile);
};

export default parseFile;
