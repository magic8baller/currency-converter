import {withTheme} from 'emotion-theming'
import React from 'React'
import Select from 'react-select'
import {css} from '@emotion/core'
const Dropdown = ({theme, conversions, id, handleDropdown}) => {
	const customFilter = (option, searchText) => {
		return option.key.toLowercase() == searchText.toLowercase()
	}
	const renderOptions = () => {
		return conversions.currencies.map(currency =>
		<Option css={{backgroundColor: theme.background, color: theme.color, borderColor: theme.buttonBorder}} key={`${currency[1]}, (${currency[0]})`} value={currency[0]}>
		{currency[1]} ({currency[0]})
		</Option>
		)
	}
return (
	<Select css={{width: 300, backgroundColor: theme.background, color: theme.color, borderColor: theme.buttonBorder}}
	isSearchable={true}
	value={(id== 'left') ? conversions.leftCurrencySelect : conversions.rightCurrencySelect}
	placeholder='Select a currency or enter search term'
	noOptionsMessage={() => 'Currency not found'}
	closeMenuOnSelect={true}
	onChange={(e) => handleDropdown(id, e)}
	filterOption={customFilter}
	>
	{renderOptions()}
	</Select>
)
}

export default withTheme(Dropdown)