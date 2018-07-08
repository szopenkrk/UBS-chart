import React, { Component } from 'react';
import styles from './style.css';

class CurrencyChart extends Component {
	componentWillMount () {
		console.log('Mounted');
	}

	render() {
    	return (
    		<div id="currencyContainer">
    			<div className={styles.currencyHeader}>
    			</div>

    		</div>
    	)
	}
}

export default CurrencyChart;