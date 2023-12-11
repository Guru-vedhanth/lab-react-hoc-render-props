import React, { Component } from 'react'
import UpdatedComponent from './Parent'

class LikePost extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    const {count,incrementCount}=this.props
    return (
      <div><button onClick={incrementCount}>LikePost - {count}</button></div>
    )
  }
}

export default UpdatedComponent(LikePost)