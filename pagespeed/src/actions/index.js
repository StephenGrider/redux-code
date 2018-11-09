import google from '../apis/google';

export const fetchReport = url => {
  return async function(dispatch, getState) {
    const response = await google.get('/runPagespeed', {
      params: { url }
    });

    dispatch({ type: 'FETCH_REPORT', payload: response.data });
  };
};
