import fileParser from './parsers.js';
import formatter from './formatters/index.js';

const genDiff = (path1, path2, format = 'stylish') => {
  const data1 = fileParser(path1);
  const data2 = fileParser(path2);
  return formatter(data1, data2, format);
};

export default genDiff;
