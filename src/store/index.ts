// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk)
//   )
// );

// export default store;

import { applyMiddleware, createStore, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, AnyAction>)
  )
);

export default store;
