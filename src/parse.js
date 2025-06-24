import fs from 'fs';
import * as path from 'path';
import _ from 'lodash';

const fileParseJson = (filepath) => {
  const readFile = fs.readFileSync(path.resolve(process.cwd(), filepath));
  return JSON.parse(readFile);
};

export default (filepath1, filepath2) => {
  const file1 = fileParseJson(filepath1);
  const file2 = fileParseJson(filepath2);
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const sortedKeys = _.union(keys1, keys2).sort();

  return (
    sortedKeys.reduce((acc, key) => {
      if (!Object.hasOwn(file1, key)) {
        acc += `\n  + ${key}: ${file2[key]}`;
      } else if (!Object.hasOwn(file2, key)) {
        acc += `\n  - ${key}: ${file1[key]}`;
      } else if (file1[key] !== file2[key]) {
        acc += `\n  - ${key}: ${file1[key]}`;
        acc += `\n  + ${key}: ${file2[key]}`;
      } else {
        acc += `\n    ${key}: ${file1[key]}`;
      }
      return acc;
    }, '{') + '\n}'
  );
};
