 import { combineReducers } from 'redux';
 import themeReducer from './themeReducer'
 import currencyConversionReducer from './currencyConversionReducer'

combineReducers({
	test: () => 'hello',
	currency: currencyConversionReducer,
	theme: themeReducer
})
 export default combineReducers;