import React from 'react'
import {css} from '@emotion/core'
import {withTheme} from '@emotion/theme'

const NumericInput = ({handleAmount, conversions, id, theme}) => (

	<input css={{
		width: 120,
		backgroundColor: theme.background,
		color: theme.text,
		borderColor: theme.buttonBorder
	}}
		type="number"
		min={0.0}
		max={1000000000000}
		step={0.01}
		formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
		placeholder='Enter amount',
		value={(id == 'left' ? conversions.leftCurrencyAmount : conversions.rightCurrencyAmount)}
		onChange={(e) => handleAmount(id, e)}
		onSubmit={e => e.preventDefault()}
	/>
)

export default withTheme(NumericInput)