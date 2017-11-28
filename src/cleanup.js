import MagicString from 'magic-string'
import removeLines from './remove-lines'

export default function cleanup (source, file, options) {
  const firstpass = new RegExp( '\\b(?:propTypes|prop-types)\\b' )
  
  // the file doesn't contain propTypes
  if (!firstpass.test(source)) return null

  
  const magicString = new MagicString(source)

  const changes = removeLines(magicString, source, file, options)

  return changes
    ? {
      code: magicString.toString(),
      map: options.sourceMap ? magicString.generateMap({ hires: true }) : null
    }
    : null   // tell to Rollup that discard this result
}