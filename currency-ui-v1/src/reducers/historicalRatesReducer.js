import {SET_DATE_CURRENCY_RATE, GET_DATE_CURRENCY_RATE, SET_BASE} from '../constants/actionTypes.js'
import initialState from './initialState'



export default function (state = initialState.historicalRate, action) {
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