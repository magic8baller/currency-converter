import {FETCH_ERROR, GET_CONVERSION_DATA, SET_CONVERSION_RATES, SET_LEFT_CURRENCY, SET_LEFT_CURRENCY_AMOUNT, SET_RIGHT_CURRENCY, SET_RIGHT_CURRENCY_AMOUNT, SWAP_CURRENCY} from '../constants/actionTypes.js'

const initialState = {
	rates: null,
	base: 'USD',
	currencies: '',
	leftAmount: '',
	rightAmount: '',
	leftCurrencySelect: 'Select or enter a currency',
	rightCurrencySelect: 'Select or enter a target currency'
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CONVERSION_RATES:
			return {...state, rates: action.payload.rates, base: action.payload.base, errors: ''}
		case GET_CONVERSION_DATA:
			return {...state, currencies: action.payload, errors: ''}

		case SET_LEFT_CURRENCY:
			return {...state, leftCurrencySelect: action.payload}
		case SET_RIGHT_CURRENCY:
			return {...state, rightCurrencySelect: action.payload}

		case SET_LEFT_CURRENCY_AMOUNT:
			return {...state, leftAmount: action.payload}
		case SET_RIGHT_CURRENCY_AMOUNT:
			return {...state, rightAmount: action.payload}

		case SWAP_CURRENCY:
			return {...state, errors: ''}
		case FETCH_ERROR:
			return {
				...state, ...action.payload
			}

		default:
			return state
	}
}