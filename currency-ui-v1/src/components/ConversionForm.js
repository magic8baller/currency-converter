import React from 'react'
import NumericInput from './NumericInput'
import Dropdown from './Dropdown'
const ConversionForm = (props) => {
	return (
		<div css={{borderColor: 'red'}}>
			<NumericInput id={props.id} />
<br/>
&nbsp;&nbsp;&nbsp;
<br/>
			<Dropdown id={props.id} />
		</div>
	)
}

export default ConversionForm