import React, { Component } from 'react';
import Palette from './Palette';
import SeedColors from './SeedColors';
class App extends Component {
  render() {
    return (
      <Palette {...SeedColors[4]} />
    );
  }
}

export default App;
