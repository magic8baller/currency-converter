import {FETCH_ERROR, GET_CONVERSION_DATA, INPUT_BASE_CURRENCY, INPUT_TARGET_CURRENCY, SELECT_BASE_CURRENCY, SELECT_TARGET_CURRENCY, SET_CONVERSION_RATES} from '../constants'

const initialState = {
	rates: '',
	baseCurrency: '',
	currencies: null,
	baseCurrencyInput: '',
	targetCurrencyInput: '',
	baseCurrencySelect: 'Select or enter a base currency',
	targetCurrencySelect: 'Select or enter a target currency'
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CONVERSION_RATES:
			return {...state, rates: action.payload.rates, baseCurrency: action.payload.base}
		case GET_CONVERSION_DATA:
			return {...state, currencies: action.payload}
		case SELECT_BASE_CURRENCY:
			return {...state, baseCurrencySelect: action.payload}
		case SELECT_TARGET_CURRENCY:
			return {...state, targetCurrencySelect: action.payload}
		case INPUT_BASE_CURRENCY:
			return {...state, baseCurrencyInput: action.payload}
		case INPUT_TARGET_CURRENCY:
			return {...state, targetCurrencyInput: action.payload}
		case FETCH_ERROR:
			return {
				...state, error: true
			}

		default:
			return state
	}
}