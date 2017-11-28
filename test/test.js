const fs = require('fs')
const assert = require('assert')
const stripPropTypes = require('..')
const path = require('path')

function compare (sample, options) {
  const filename = path.resolve(`test/samples/${sample}/input.js`)
  const input = fs.readFileSync(filename, 'utf-8')
  const output = stripPropTypes(options).transform(input, filename)

  assert.equal(output ? output.code : input, fs.readFileSync(`test/samples/${sample}/output.js`, 'utf-8'))
}

describe( 'rollup-plugin-strip-prop-types', () => {
  it( 'removes prop types and default props in react component', () => {
    compare('class-prop-types')
  })

  it( 'removes prop types and default props in react functional component', () => {
    compare('function-prop-types')
  })

  it( 'removes prop types and default props in common js react component', () => {
    compare('cjs-prop-types')
  })
})
