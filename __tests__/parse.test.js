import resultStylish from '../__fixtures__/results/resultStylish.js'
import resultPlain from '../__fixtures__/results/resultPlain.js'
import resultJSON from '../__fixtures__/results/resultJSON.js'
import genDiff from '../index.js'

describe('stylish format', () => {
  test('json', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultStylish)
  })
  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultStylish)
  })
  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultStylish)
  })
})

describe('plain format', () => {
  test('json', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain')).toBe(resultPlain)
  })
  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml', 'plain')).toBe(resultPlain)
  })
  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'plain')).toBe(resultPlain)
  })
})

describe('json format', () => {
  test('json', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json')).toBe(resultJSON)
  })
  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml', 'json')).toBe(resultJSON)
  })
  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'json')).toBe(resultJSON)
  })
})
