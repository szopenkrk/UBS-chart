import React, { Component } from 'react';
import './App.css';
import CurrencyChart from './components/currency-chart/index';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currency : [
                {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
                {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
                {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
                {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
                {"pair":"USD JPY", "buy":110.467, "sell":110.417},
                {"pair":"EUR JPY", "buy":120.589, "sell":120.491}
            ]
        }
    }

  componentDidMount () {
      setInterval(() => this.updateDate(), 1000);
      this.forceUpdate()
  }

  updateDate () {
      console.log('Update data');
      this.state.currency.map(function(cash, index) {
          var counter = Math.floor(Math.random() * 2) + 1;
          var counter2 = Math.floor(Math.random() * 2) + 1;

          cash.buy = counter === 1 ? cash.buy +0.2 : cash.buy-0.2;
          cash.sell = counter2 === 1 ? cash.sell +0.2 : cash.sell-0.2;
      });
      this.forceUpdate()
  }

  render() {
    return (
      <div className="App">
      	{
      		this.state.currency.map(
      			function(cash, index) { 
      				return <CurrencyChart key={index} currency={cash.pair} buy={cash.buy} sell={cash.sell} />
      			}
      		)
      	}
        
      </div>
    );
  }
}

export default App;
