import {INPUT_BASE_CURRENCY, INPUT_SECOND_CURRENCY, SELECT_BASE_CURRENCY, SELECT_SECOND_CURRENCY, SET_CONVERSION_RATES, GET_CONVERSION_DATA, FETCH_ERROR} from '../constants'

const initialState = {
	rates: '',
	baseCurrency: '',
	currencies: null,
	baseCurrencyInput: '',
	secondaryCurrencyInput: '',
	baseCurrencySelect: 'Select or enter a base currency',
	secondaryCurrencySelect: 'Select or enter a secondary currency'
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CONVERSION_RATES:
			return {...state, rates: action.payload.rates, baseCurrency: action.payload.base}
			case GET_CONVERSION_DATA:
				return {...state, currencies: action.payload}
				case SELECT_BASE_CURRENCY:
					return {...state, baseCurrencySelect: action.payload}
					case SELECT_SECOND_CURRENCY:
						return {...state, secondaryCurrencySelect: action.payload}
				case INPUT_BASE_CURRENCY:
					return {...state, baseCurrencyInput: action.payload}
					case INPUT_SECOND_CURRENCY:
						return {...state, secondaryCurrencyInput: action.payload}
		case FETCH_ERROR:
			return {
				...state, error: true
			}

		default:
			return state
	}
}