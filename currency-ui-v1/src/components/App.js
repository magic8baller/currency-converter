/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {Component} from 'react';
import ThemeButton from '../styles/ThemeButton';
class App extends Component {
	render () {
		const {children, setIsDark} = this.props
		return (
			<div css={theme => css`
				padding: 20px;
				background-color: ${theme.background};
				color: ${theme.text};
				height: 100vh;
				transition-duration: 0.2s;
				transition-property: background-color, color;
			`}>
				<ThemeButton text={`Change to ${this.props.isDark ? "light" : "dark"} mode`} onClick={() => setIsDark()} />
				<div css={css`
				text-align: center;
				`}>
					{children}
				</div>
			</div>);
	}

}


export default App