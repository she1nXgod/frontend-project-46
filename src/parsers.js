import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const fileParser = (filepath) => {
  const readFile = fs.readFileSync(path.resolve(process.cwd(), filepath));
  const format = path.extname(filepath);
  if (format === '.json') {
    return JSON.parse(readFile);
  } else if (format === '.yaml') {
    return yaml.load(readFile);
  } else if (format === '.yml') {
    return yaml.load(readFile);
  }
};

export default fileParser;
