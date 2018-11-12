const selectionReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_REPORT':
      return action.payload;
    case 'FETCH_REPORT_SUCCESS':
      return action.payload.id;
    default:
      return state;
  }
};

export default selectionReducer;
