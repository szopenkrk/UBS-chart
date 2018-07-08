import React, { Component } from 'react';
import styles from './index.css';

class CurrencyChart extends Component {
	constructor(props){
    	super(props);

    }

	componentWillMount () {
		console.log('Mounted');
	}

	render() {
    	return (
    		<div id="currencyContainer">
    			<div className="currencyHeader">
    				{this.props.currency}
    			</div>
    			<div className="leftCompare">
    			</div>
    			<div className="rightCompare">
    			</div>
    		</div>
    	)
	}
}

export default CurrencyChart;