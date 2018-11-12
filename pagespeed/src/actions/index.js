import google from '../apis/google';

export const fetchReport = url => {
  return async function(dispatch, getState) {
    dispatch({ type: 'FETCH_REPORT' });

    try {
      const response = await google.get('/runPagespeed', {
        params: { url }
      });

      dispatch({ type: 'FETCH_REPORT_SUCCESS', payload: response.data });
    } catch (err) {
      dispatch({ type: 'FETCH_REPORT_ERROR', payload: 'Failed to fetch URL.' });
    }
  };
};

export const selectReport = url => {
  return {
    type: 'SELECT_REPORT',
    payload: url
  };
};
