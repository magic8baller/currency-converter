/** @jsx jsx */
import React, {Component} from 'react';
import {css, jsx} from '@emotion/core'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const theme = useTheme();
    return (<div css={theme => css`
	padding: 50px 0;
	background-color: ${theme.background};
	color: ${theme.text};
	text-align: center;
	height: 100vh;
	transition-duration: 0.2s;
	transition-property: background-color, color;
	`}>
			<button css={css`
          margin-top: 30px;
          border: 2px solid ${theme.buttonBorder};
          background-color: ${theme.buttonBg};
          color: ${theme.buttonText};
          padding: 14px 28px;
          font-size: 16px;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          cursor: pointer;

          :hover {
            background-color: ${theme.buttonBgHover};
            color: ${theme.buttonTextHover};
          }
        `} onClick={() => {
        this.props.setIsDark(!this.props.isDark);
      }}>
				Change to {this.props.isDark ? "light" : "dark"} mode
      </button>
		</div>);
  }

}


export default App