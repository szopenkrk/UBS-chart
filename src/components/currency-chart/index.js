import React, { Component } from 'react';
import { styles } from './index.css';

class CurrencyChart extends Component {
	componentWillMount () {
		console.log('Mounted');
	}

	renderArrow (buy ,sell) {
		if(buy > sell) {
			return 'redArrow';
		} else {
			return 'greenArrow';
		}
	}

	showPartOfPair (currency, part) {
		if(part === 1) {
			return currency.substring(0,3);
		}
		if(part === 2) {
			return currency.substring(4,7);
		}
	}

	render() {
    	return (
    		<div id="currencyContainer">
    			<div className="currencyHeader">
    				{this.props.currency}
    			</div>
    			<div className="leftCompare">
    				<div className="buyHeader">
    					Buy {this.showPartOfPair(this.props.currency, 1)}
    				</div>
    				<div className="buyValue">
    					{this.props.buy}
    				</div>
    			</div>
    			<div className="centerArrow">
    				<div className={this.renderArrow(this.props.buy, this.props.sell)}>
    				</div>
    			</div>
    			<div className="rightCompare">
    				<div className="sellHeader">
    					Sell {this.showPartOfPair(this.props.currency, 2)}
    				</div>
    				<div className="sellValue">
    					{this.props.sell}
    				</div>
    			</div>
    		</div>
    	)
	}
}

export default CurrencyChart;