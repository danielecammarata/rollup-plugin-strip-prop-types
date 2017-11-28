import React from 'react'

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

export default sample