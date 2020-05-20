import React, { Component } from 'react';
import Palette from './Palette';
import SeedColors from './SeedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    return (
      <Palette palette={generatePalette(SeedColors[4])} />
    );
  }
}

export default App;
