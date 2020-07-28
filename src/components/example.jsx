import React, { Component } from 'react'

class Guillo extends Component {
    constructor(props) {
      super(props);
      this.state = {
      clicked: false,
      counter: 0
    }
  }

  handleClick = () => {
    this.setState( {
     clicked: !this.state.clicked ,
     counter: this.state.counter + 1
   })
  };

  render() {
    return <h2 className={this.state.clicked ? 'clicked' : ''} onClick={this.handleClick}> Guillo clack {this.state.counter}</h2>
  }
}

export default Guillo
