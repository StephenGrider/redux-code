import { combineReducers } from 'redux';

const dataReducer = (state, action) => {
  return [];
};

const loadingReducer = (state, action) => {
  return false;
};

const errorReducer = (state, action) => {
  return null;
};

export default combineReducers({
  data: dataReducer,
  loading: loadingReducer,
  error: errorReducer
});
