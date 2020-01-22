import {SET_THEME} from '../constants'
export const setTheme = theme => dispatch => {
	dispatch({ type: SET_THEME, payload: theme})
}