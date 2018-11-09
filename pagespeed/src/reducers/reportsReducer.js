const reportsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REPORT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reportsReducer;
