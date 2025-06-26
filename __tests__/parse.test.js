import result from '../__fixtures__/result.js';
import genDiff from '../index.js';

test('json', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result);
});
test('yaml', () => {
  expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(result);
});
test('yml', () => {
  expect(genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toEqual(result);
});
