import { combineReducers } from 'redux-immutable';
import save from './save';
import save1 from './save1';

const rootReducer = combineReducers({
  save,
  save1,
});

export default rootReducer;
