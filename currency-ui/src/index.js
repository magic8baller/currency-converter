import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import configureStore, {history} from './store/configureStore';
const store = configureStore();

render(
	<Root store={store} />,
	document.getElementById('root')
);

serviceWorker.unregister();
