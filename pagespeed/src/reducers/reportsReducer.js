import { combineReducers } from 'redux';

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REPORT_SUCCESS':
      return [...state, action.payload];
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_REPORT':
      return true;
    case 'FETCH_REPORT_SUCCESS':
      return false;
    case 'FETCH_REPORT_ERROR':
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_REPORT':
      return null;
    case 'FETCH_REPORT_SUCCESS':
      return null;
    case 'FETCH_REPORT_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer,
  loading: loadingReducer,
  error: errorReducer
});
