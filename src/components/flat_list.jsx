import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {

  render(){
    const renderFlats = this.props.flats.map(flat => {
      return <Flat name={flat.name} image={flat.imageUrl} price={flat.price} key={flat.name} />
    })
    return(
      <div className="flat-list">
      {renderFlats}
      </div>
      )
  }
}

export default FlatList


