import {ThemeProvider} from 'emotion-theming';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {setIsDark, setTheme} from '../actions/themeActions';
import '../styles/styles.css';
import App from '../components/App';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import {themeLight, themeDark} from '../styles/global'
class Root extends Component {

	render () {
		return (
		<Provider store={this.props.store}>
			<ThemeProvider theme={this.props.mode.isDark ? themeDark : themeLight}>
				<App isDark={this.props.mode.isDark} setIsDark={this.props.setIsDark}>
					<Router history={this.props.history}>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route component={NotFoundPage} />
						</Switch>
					</Router>
				</App>
			</ThemeProvider>
		</Provider>
		);
	}
}


Root.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};
const mapStateToProps = state => ({mode: state.theme})

export default connect(mapStateToProps, {setTheme, setIsDark})(Root)