import React, { Component } from 'react';
import flats from '../data/flats.js';

class Flat extends Component {
  render() {
    return(
      <div className="card" style= {{ backgroundImage: `url(${this.props.imageUrl})` }}>
        <div className="card-category">
          {this.props.price}
        </div>
        <div className="card-description">
          <h2>{flats[0].name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
      )
  }
}

export default Flat
