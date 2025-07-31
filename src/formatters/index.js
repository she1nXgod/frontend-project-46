import buildStylish from './stylish.js';
import buildPlain from './plain.js';

export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return buildStylish(tree);
    case 'plain':
      return buildPlain(tree);
    default:
      throw new Error(`Unsupported format '${format}`);
  }
};
