import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
 import CombineReducer from './Reducer/CombineReduce';
 const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
 const store = createStore(CombineReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

  export default store