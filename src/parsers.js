import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const fileParser = (filepath) => {
  const readFile = fs.readFileSync(path.resolve(process.cwd(), filepath));
  const fileExtension = path.extname(filepath);
  if (fileExtension === '.json') {
    return JSON.parse(readFile);
  } else if (fileExtension === '.yaml') {
    return yaml.load(readFile);
  } else if (fileExtension === '.yml') {
    return yaml.load(readFile);
  }
};

export default fileParser;
