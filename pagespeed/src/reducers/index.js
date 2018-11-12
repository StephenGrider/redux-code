import { combineReducers } from 'redux';
import reportsReducer from './reportsReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
  reports: reportsReducer,
  selectedReport: selectionReducer
});
