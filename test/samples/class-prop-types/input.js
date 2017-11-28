import React from 'react'
import PropTypes from 'prop-types'

class sample extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { myProp1, myProp2 } = this.props
  }

  render() {
    return (
      <div>
        Just a sample file
      </div>
    )
  }
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