import React from 'react'
import PropTypes from 'prop-types'

function sample (props) {
  return (
    <div>
      Just a sample file
    </div>
  )
}

sample.propTypes = {
  myProp1: PropTypes.bool,
  myProp2: PropTypes.string
}

sample.defaultProps = {
  myProp1: false,
  myProp2: ''
}

export default sample