 import { combineReducers } from 'redux';
 import themeReducer from './themeReducer'
 import currencyConversion from './currencyConversionReducer';
 import historicalRates from './historicalRatesReducer'


const rootReducer = combineReducers({

test: () => '123',
	currencyConversion,
	historicalRates,
	theme: themeReducer

})
 export default rootReducer;