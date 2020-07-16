import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';
import New from './prueba.jsx';

class App extends Component {
  render() {
    return(
      <div>
        <FlatList />
        <New />
        <div className="map-container">
        <SimpleMap />
        </div>
      </div>
      )
  }
}

export default App
