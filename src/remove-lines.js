import acorn from 'acorn-jsx'
import { walk } from 'estree-walker'

export default function removeLines (magicString, code, file, options) {
  const whitespace = /\s/
  let ast
  let changed = false

  function remove (start, end) {
    while (whitespace.test(code[start - 1])) start -= 1
    magicString.remove(start, end)
  }
  
  try {
    ast = acorn.parse( code, {
      ecmaVersion: 6,
      sourceType: 'module',
      plugins: {
        jsx: true
      }
    })
  } catch ( err ) {
    this.warn( 'stripPropTypes parse error' )
    err.message += ` in ${file}`
    throw err
  }

  walk( ast, {
    enter (node, parent) {
      Object.defineProperty( node, 'parent', {
        value: parent,
        enumerable: false
      })

      if (options.sourceMap) {
        magicString.addSourcemapLocation(node.start)
        magicString.addSourcemapLocation(node.end)
      }

      // strip away import or require
      if (node.type === 'Literal' && node.value === 'prop-types') {
        if (node.parent.type === 'ImportDeclaration') { // remove ES6 import
          remove(node.parent.start, node.parent.end)
        } else { // remove require
          let tmpNode = node.parent
          while (tmpNode.parent.type !== 'Program') { // reach the variable declaration level
            tmpNode = tmpNode.parent
          }
          remove(tmpNode.start, tmpNode.end)
        }
      }

      // strip away propTypes or defaultProps definitions
      if (node.type === 'ExpressionStatement' && 
          node.expression.type === 'AssignmentExpression' &&
          node.expression.left.property &&
         (node.expression.left.property.name === 'propTypes' ||
          node.expression.left.property.name === 'defaultProps')) {
        remove( node.start, node.end )
        changed = true
      }
    }
  })

  return changed

}
