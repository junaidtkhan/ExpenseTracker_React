import React, { Component } from 'react'
import UpdatedComp from './HigherOrder';
export class _Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        };
      }
      IncrementCount=()=>{
        this.setState({count: this.state.count + 1})
      };
  render() {
    const {count}=this.state
    return (
      <div><button onMouseEnter={this.IncrementCount}>{this.props.name} Incremented to {count}</button></div>
    )
  }
}

export default UpdatedComp(_Counter)