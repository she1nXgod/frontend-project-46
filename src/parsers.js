import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const fileParser = (filepath) => {
  const readFile = fs.readFileSync(path.resolve(process.cwd(), filepath));
  const format = path.extname(filepath);

  switch (format) {
    case '.json':
      return JSON.parse(readFile);
    case '.yaml':
      return yaml.load(readFile);
    case '.yml':
      return yaml.load(readFile);
    default:
      return 'Unsupported format';
  }
};

export default fileParser;
