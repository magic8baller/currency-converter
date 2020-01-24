import {SET_IS_DARK, SET_THEME} from '../constants/actionTypes.js'

const initialState = {
isDark: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_IS_DARK:
			return {...state, isDark: !state.isDark}
			case SET_THEME:
				return {...state, theme: action.payload}

		default:
			return state
	}
}