import fileParser from './parsers.js';
import formatter from './formatters/index.js';
import buildDiff from './diffBuilder.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const obj1 = fileParser(filepath1);
  const obj2 = fileParser(filepath2);
  const diff = buildDiff(obj1, obj2);
  return formatter(diff, formatName);
};

export default genDiff;
