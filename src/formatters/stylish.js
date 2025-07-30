import _ from 'lodash';

const getIndent = (depth, symbol = ' ') => `${' '.repeat(depth * 4 - 2)}${symbol} `;
const getBracketIndent = (depth) => ' '.repeat((depth - 1) * 4);

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) return String(value);
  const lines = Object.entries(value).map(
    ([key, val]) => `${getIndent(depth + 1)}${key}: ${stringify(val, depth + 1)}`
  );

  return `{\n${lines.join('\n')}\n${getBracketIndent(depth + 1)}}`;
};

const buildStylish = (obj1, obj2, depth = 1) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  const lines = keys.flatMap((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (!Object.hasOwn(obj1, key)) {
      return `${getIndent(depth, '+')}${key}: ${stringify(val2, depth)}`;
    }
    if (!Object.hasOwn(obj2, key)) {
      return `${getIndent(depth, '-')}${key}: ${stringify(val1, depth)}`;
    }
    if (_.isPlainObject(val1) && _.isPlainObject(val2)) {
      return `${getIndent(depth)}${key}: ${buildStylish(val1, val2, depth + 1)}`;
    }
    if (!_.isEqual(val1, val2)) {
      return [
        `${getIndent(depth, '-')}${key}: ${stringify(val1, depth)}`,
        `${getIndent(depth, '+')}${key}: ${stringify(val2, depth)}`,
      ];
    }

    return `${getIndent(depth)}${key}: ${stringify(val1, depth)}`;
  });

  return `{\n${lines.join('\n')}\n${getBracketIndent(depth)}}`;
};

export default buildStylish;
