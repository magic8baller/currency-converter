import {FETCH_ERROR, GET_CONVERSION_DATA, SET_CONVERSION_RATES, SET_LEFT_CURRENCY, SET_LEFT_CURRENCY_AMOUNT, SET_RIGHT_CURRENCY, SET_RIGHT_CURRENCY_AMOUNT} from '../constants/actionTypes.js'
import {fetchExchangeData} from '../services/currencyExchange.service'
export const getConversionData = () => (dispatch, getState) => {
	const {currencyConversion} = getState()
	if (currencyConversion.currencies === undefined) {
		fetchExchangeData()
			.then(res => dispatch(setAction(SET_CONVERSION_RATES, {rates: res.data, base: 'USD'})))
			.catch((e) => dispatch(setAction(FETCH_ERROR, {errors: {err: e.message, loc: fetchExchangeData()}})))
		fetchCurrencyData()
			.then(rawResp => Object.entries(rawResp.data))
			.then(formattedConversions =>
				dispatch(setAction(GET_CONVERSION_DATA, formattedConversions)))
			.catch((e) => setAction(FETCH_ERROR, {errors: {err: e.message, loc: fetchCurrencyData()}}))
	} else {
		return null
	}
}

export const setDropdowns = (id, value) => (dispatch, getState) => {
	const conversions = getState().currencyConversion
	if (id === 'left') {
		dispatch(setAction(SET_LEFT_CURRENCY, value))
		if (conversions.rightCurrencySelect != 'Select or enter a currency' && conversions.leftCurrencyAmount) {
			setConversions(SET_RIGHT_CURRENCY_AMOUNT, conversions.leftCurrencyAmount, value, conversions.rightCurrencySelect)
		} else if (conversions.rightCurrencySelect != 'Select or enter a currency' && conversions.rightCurrencyAmount) {
			setConversions(SET_LEFT_CURRENCY_AMOUNT, conversions.rightCurrencyAmount, conversions.rightCurrencySelect, value)
		}
	} else if (id == 'right') {
		dispatch(setAction(SET_RIGHT_CURRENCY, value))
		if (conversions.leftCurrencySelect != 'Select or enter a base currency' && conversions.leftCurrencyAmount) {
			setConversions(SET_RIGHT_CURRENCY_AMOUNT, conversions.leftCurrencyAmount, conversions.leftCurrencySelect, value)
		} else if (conversions.leftCurrencySelect != 'Select or enter a target currency' && conversions.rightCurrencyAmount) {
			setConversions(SET_LEFT_CURRENCY_AMOUNT, conversions.rightCurrencyAmount, value, conversions.leftCurrencySelect)
		}
	}
}

export const setAmount = (id, value) => (dispatch, getState) => {
	const data = getState().currencyConversion
	fx.base = data.base
	fx.rates = data.rates
	if (value === 0 || value === '0') {
		dispatch(setAction(SET_LEFT_CURRENCY_AMOUNT, 0))
		dispatch(setAction(SET_RIGHT_CURRENCY_AMOUNT, 0))
	} else if (id == 'left') {
		if (value === '' || isNaN(value)) {
			dispatch(setAction(SET_LEFT_CURRENCY_AMOUNT, ''))
		} else {
			dispatch(setAction(SET_LEFT_CURRENCY_AMOUNT, value))
			try {
				(SET_RIGHT_CURRENCY_AMOUNT, value, data.leftCurrencySelect, data.rightCurrencySelect)
			} catch (e) {
				console.error(e)

			}
		}
	} else if (id == 'right') {
		if (value === '' || isNaN(value)) {
			dispatch(setAction(SET_RIGHT_CURRENCY_AMOUNT, ''))
		} else {
			dispatch(setAction(SET_RIGHT_CURRENCY_AMOUNT, value))
			try {
				(SET_LEFT_CURRENCY_AMOUNT, value, data.rightCurrencySelect, data.leftCurrencySelect)
			} catch (e) {
				console.error(e)
			}
		}
	}
}

export const swapValues = () => (dispatch, getState) => {
	const data = getState().currencyConversion
	dispatch(setAction(SET_LEFT_CURRENCY, data.rightCurrencySelect))
	dispatch(setAction(SET_RIGHT_CURRENCY, data.leftCurrencySelect))
if (data.leftCurrencyAmount) {
	setConversions(SET_LEFT_CURRENCY_AMOUNT, data.leftCurrencyAmount, data.leftCurrencySelect, data.rightCurrencySelect)
}
if (data.rightCurrencyAmount) {
	setConversions(SET_RIGHT_CURRENCY_AMOUNT, data.rightCurrencyAmount, data.rightCurrencySelect, data.leftCurrencySelect)
}
}
export const setConversions = (action, amount, base, quote) => dispatch => {
	dispatch({type: action, payload: parseFloat(fx.convert(amount, {from: base, to: quote}))})
}

export const setAction = (type, payload) => {
	({type, payload})
}