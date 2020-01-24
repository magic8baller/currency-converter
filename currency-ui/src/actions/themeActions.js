import {SET_THEME, SET_IS_DARK} from '../constants'
export const setTheme = theme => dispatch => {
	dispatch({ type: SET_THEME, payload: theme})
}

export const setIsDark = () => dispatch => {
	dispatch({ type: SET_IS_DARK})
}