import React, { Component } from 'react';
import Flat from './flat.jsx';
import flats from '../data/flats.js';

class FlatList extends Component {
  render() {
    return(
      <div className="flat-list">
        <Flat />
      </div>

      )
  }
}

export default FlatList;
