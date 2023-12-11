import React, { Component } from 'react'

const UpdatedComponent = OriginalComponent => {

    class Parent extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
            count:0
          }
        }
    
        incrementCount=()=>{
            this.setState((previous)=>{
                return{count:previous.count+1}
            })
        }
      render() {
        return (
            <OriginalComponent
             count={this.state.count}
             incrementCount={this.incrementCount}
             {...this.props}
            />
        )
      }
    }
    
    return Parent

}


export default UpdatedComponent