const formatValue = (value) => {
  if (typeof value === 'string') return `'${value}'`;
  if (value === null) return 'null';
  if (typeof value === 'object') return '[complex value]';
  return String(value);
};

const buildPlain = (tree, parentPath = '') => {
  const lines = tree.flatMap((node) => {
    const { key, type, value, oldValue, newValue, children } = node;
    const propertyPath = parentPath ? `${parentPath}.${key}` : key;

    switch (type) {
      case 'added':
        return `Property '${propertyPath}' was added with value: ${formatValue(value)}`;
      case 'removed':
        return `Property '${propertyPath}' was removed`;
      case 'updated':
        return `Property '${propertyPath}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
      case 'nested':
        return buildPlain(children, propertyPath);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown node type: '${type}'`);
    }
  });

  return lines.join('\n');
};

export default buildPlain;
