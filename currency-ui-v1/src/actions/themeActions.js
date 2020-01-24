import {SET_IS_DARK, SET_THEME} from '../constants/actionTypes.js'
export const setTheme = theme => dispatch => {
	dispatch({ type: SET_THEME, payload: theme})
}

export const setIsDark = () => dispatch => {
	dispatch({ type: SET_IS_DARK})
}