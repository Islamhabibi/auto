import { combineReducers } from 'redux';
import { ErrorReducer } from './ErrorReducer';
import { reducer } from './Reducer';
 



const CombineReducer = combineReducers({
    ErrorReducer,
   reducer,
  
});

export default CombineReducer;