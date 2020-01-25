import {SET_IS_DARK} from '../constants/actionTypes.js'

const initialState = {
	isDark: window.matchMedia("(prefers-color-scheme: dark)").matches
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_IS_DARK:
			return {...state, isDark: !state.isDark}
		default:
			return state
	}
}