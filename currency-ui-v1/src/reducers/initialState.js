import {formatDate} from '../lib/formatDate'
export default {
	currencyConversion: {
		rates: null,
		base: 'USD',
		currencies: '',
		leftAmount: '',
		rightAmount: '',
		leftCurrencySelect: 'Select or enter a currency',
		rightCurrencySelect: 'Select or enter a target currency'
	},
	historicalRate: {
		base: 'USD',
		date: formatDate(new Date()),
		rates: ''
	}
};
