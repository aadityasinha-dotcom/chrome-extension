// import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import reducers from './app.reducer';

// const composeEnhancers = composeWithDevTools({});
// export const store = createStore(
//   reducers,
//   {},
//   composeEnhancers(applyMiddleware(thunk))
// );

import { combineReducers } from 'redux';
import appReducer from './app.reducer';

const rootReducer = combineReducers({
  app: appReducer,
  // add other reducers here if needed
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

