import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
import {createBrowserHistory} from "history";

export const history = createBrowserHistory()
function configureStore() {
  const middlewares = [
    thunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}


export default configureStore;
