import {SET_DATE_CURRENCY_RATE, GET_DATE_CURRENCY_RATE, SET_BASE} from '../constants'
import {formatDate} from '../lib/formatDate'

const initialState = {
	base: 'USD',
	date: formatDate(new Date()),
	rates: ''
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_BASE:
			return {...state, base: action.payload}
		case SET_DATE_CURRENCY_RATE:
			return {...state, date: action.payload}
			case GET_DATE_CURRENCY_RATE:
				return {...state, rates: action.payload}
		default:
			return state
	}
}