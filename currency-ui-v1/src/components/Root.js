import {ThemeProvider} from 'emotion-theming';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {setIsDark, setTheme} from '../actions/themeActions';
import Home from './Home'
import '../styles/styles.css';
import App from './App';
const themeLight = {
	text: '#000',
	background: '#fff',
	buttonText: '#000',
	buttonTextHover: '#fff',
	buttonBorder: '#000',
	buttonBg: 'rgba(0, 0, 0, 0)',
	buttonBgHover: 'rgba(0, 0, 0, 1)'
}

const themeDark = {
	text: '#fff',
	background: '#121212',
	buttonText: '#fff',
	buttonTextHover: '#000',
	buttonBorder: '#fff',
	buttonBg: 'rgba(255, 255, 255, 0)',
	buttonBgHover: 'rgba(255, 255, 255, 1)'
}
class Root extends Component {

	render () {
		return (<Provider store={this.props.store}>
			<ThemeProvider theme={this.props.mode.isDark ? themeDark : themeLight}>

				<App isDark={this.props.mode.isDark} setIsDark={this.props.setIsDark}>
					<Router history={this.props.history}>
						<Route exact path='/' component={Home} />
					</Router>
				</App>
			</ThemeProvider>
		</Provider>);
	}

}


Root.propTypes = {
	store: PropTypes.object.isRequired,
	// history: PropTypes.object.isRequired
};
const mapStateToProps = state => ({mode: state.theme})

export default connect(mapStateToProps, {setTheme, setIsDark})(Root)