// Approach #1 - seen in blog posts and tutorials!!!

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

const reportsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_REPORT':
      return { ...state, loading: true };
    case 'FETCH_REPORT_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};

export default reportsReducer;
