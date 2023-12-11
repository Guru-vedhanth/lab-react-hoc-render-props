import React, { Component } from 'react'
import UpdatedComponent from './Parent'


class LikeImage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {count,incrementCount}=this.props
    return (
      <div><button onClick={incrementCount}>LikeImage - {count}</button></div>
    )
  }
}

export default UpdatedComponent(LikeImage)
