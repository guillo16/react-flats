import React, { Component } from 'react';
import FlatList from './flat_list';
import GoogleMap from './google_map';
import flats from '../data/flats.js';
import Guillo from './example';



class App extends Component {

  render() {

    return(
        <div>
          <div className="flat-list">
            <Guillo />
            <FlatList flats={this.props.flats}/>
          </div>
          <div className="map-container">
            <GoogleMap />
          </div>
        </div>
      )
  }
}

export default App
