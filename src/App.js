import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import SeedColors from './SeedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  findPalette(id) {
    return SeedColors.find(function (palette) {
      return palette.id === id
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Pallete goes here</h1>} />
        <Route
          exact path="/palette/:id"
          render={routeProps => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          )}
        />
      </Switch>
      // <Palette palette={generatePalette(SeedColors[4])} />
    );
  }
}

export default App;
