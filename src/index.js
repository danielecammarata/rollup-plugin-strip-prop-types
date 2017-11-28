import createFilter from './create-filter'
import cleanup from './cleanup'

export default function stripPropTypes ( options = {} ) {

  if (!options) options = {}
	
	// merge include, exclude, and extensions
  const filter = createFilter(options)

  options.sourceMap = options.sourceMap !== false && options.sourcemap !== false

  return {
    name: 'stripPropTypes',

    transform ( code, id ) {

      if (filter(id)) {
        return cleanup(code, id, options)
      }

      return null
    }
  }
}
