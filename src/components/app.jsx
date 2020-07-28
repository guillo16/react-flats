import React, { Component } from 'react';
import FlatList from './flat_list';
import GoogleMap from './google_map';
import flats from '../data/flats.js';
import Guillo from './example';



class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    }
  }

  render() {

    return(
        <div>
        <Guillo />
          <FlatList flats={this.state.flats} selectedFlats={this.state.selectedFlat}/>
          <div className="map-container">
            <GoogleMap />
          </div>
        </div>
      )
  }
}

export default App
