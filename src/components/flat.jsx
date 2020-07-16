import React, { Component } from 'react';

class Flat extends Component {

  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

   handleClick = () => {
     this.setState ({ clicked: true });
  }

  render() {
    return(
      <div className="card" style= {{ backgroundImage: `url('${this.props.url}')` }} onClick={this.handleClick} >
        <div className="card-category">
        {this.props.price}
        </div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"  />
      </div>
      )
  }
}

export default Flat
