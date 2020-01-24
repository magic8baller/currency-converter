import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {setTheme, setIsDark} from '../actions/themeActions'
import {Provider} from 'react-redux';
import App from './App';
import {ThemeProvider} from 'emotion-theming'
import '../styles/styles.css'
import {themeDark, themeLight } from '../styles/global'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class Root extends Component {

  render() {
    return (<Provider store={this.props.store}>
				<ThemeProvider theme={this.props.theme.isDark ? themeDark : themeLight}>
				<Router history={this.props.history}>

						<Route component={App} isDark={this.props.theme.isDark} setIsDark={this.props.setIsDark} />
				</Router>
				</ThemeProvider>
			</Provider>);
  }

}


Root.propTypes = {
	store: PropTypes.object.isRequired,
	// history: PropTypes.object.isRequired
};
const mapStateToProps = state => ({theme: state.theme})

export default connect(mapStateToProps, {setTheme, setIsDark})(Root)