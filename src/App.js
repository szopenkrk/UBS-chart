import React, { Component } from 'react';
import './App.css';
import CurrencyChart from './components/currency-chart/index';
// import data from './mock/data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyChart currency="USD CHF" data={data}/>
        <CurrencyChart currency="GBP USD" data={data}/>
        <CurrencyChart currency="EUR CAD" data={data}/>
      </div>
    );
  }
}

export default App;
