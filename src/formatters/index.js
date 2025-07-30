import buildStylish from './stylish.js';

export default (data1, data2, format) => {
  switch (format) {
    case 'stylish':
      return buildStylish(data1, data2);
    default:
      throw new Error(`Unsupported format '${format}`);
  }
};
