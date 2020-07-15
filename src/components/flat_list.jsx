import React, { Component } from 'react';
import Flat from './flat.jsx';
import flats from '../data/flats.js';

class FlatList extends Component {

  renderFlats = () => {
    return flats.map((flat, key) => {
      return <Flat key={flat.lng} name={flat.name} price={flat.price} url={flat.imageUrl} />
    })
  }
  render() {
    return(
      <div className="flat-list">
        {this.renderFlats()}
      </div>

      )
  }
}

export default FlatList;
