import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import AppBar from './components/AppBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Search />
      </div>
    );
  }
}

export default App;
