import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancers = composeWithDevTools({});
export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

