import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    }
  }

  handleClick = () => {
    this.setState( {
      clicked: !this.state.clicked,
      counter: this.state.counter + 1 }
      )
  }
  render() {
    return(
      <div className={this.state.clicked ? "clicked" : null} onClick={this.handleClick} >
      Hola {this.state.counter}
      </div>
      )
  }
}

export default New
