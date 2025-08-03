import buildStylish from './stylish.js'
import buildPlain from './plain.js'
import buildJson from './json.js'

export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return buildStylish(tree)
    case 'plain':
      return buildPlain(tree)
    case 'json':
      return buildJson(tree)
    default:
      throw new Error(`Unsupported format '${format}`)
  }
}
