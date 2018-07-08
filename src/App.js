import React, { Component } from 'react';
import './App.css';
import CurrencyChart from './components/currency-chart/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyChart />
        <CurrencyChart />
      </div>
    );
  }
}

export default App;
