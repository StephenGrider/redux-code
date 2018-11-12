const selectionReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_REPORT':
      return action.payload;
    default:
      return state;
  }
};

export default selectionReducer;
