import result from '../__fixtures__/result.js';
import genDiff from '../index.js';

test('json', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result);
});
