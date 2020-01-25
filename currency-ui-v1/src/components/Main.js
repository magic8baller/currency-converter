import {withTheme} from 'emotion-theming'
import React from 'react'
import {FaExchangeAlt} from 'react-icons/fa'
const Main = ({}) => {
	return (
		<div>
			<Form id='left' />
			<br/>
			<button onClick={() => swapValues()}><FaExchangeAlt /></button>
			<br/>
			<Form id='right' />
		</div>
	)
}
export default withTheme(Main)