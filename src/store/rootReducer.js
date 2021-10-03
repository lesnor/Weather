import { combineReducers } from 'redux';
import stateReducer from './reducers/stateReducer';

const rootReducer = combineReducers({
  stateReducer,
});

export default rootReducer;
