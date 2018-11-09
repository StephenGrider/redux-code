import { combineReducers } from 'redux';
import reportsReducer from './reportsReducer';

export default combineReducers({
  reports: reportsReducer
});
