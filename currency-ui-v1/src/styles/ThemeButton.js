import {jsx, css} from '@emotion/core'
import React from 'react'
function ThemeButton(props){
return <button css={theme => ({
	marginTop: '10px',
	textAlign: 'left',
	border: `2px solid ${theme.buttonBorder}`,
	backgroundColor: theme.buttonBg,
	color: theme.buttonText,
	padding: '14px 28px',
	fontSize: '16px',
	transitionDuration: '0.2s',
	transitionProperty: 'backgroundColor',
	cursor: 'pointer',

	'&:hover': {
		backgroundColor: theme.buttonBgHover,
		color: theme.buttonTextHover
}
})}{...props}>{props.text}</button>
}


export default ThemeButton