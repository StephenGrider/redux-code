import google from '../apis/google';

export const fetchReport = async url => {
  const response = await google.get('/runPagespeed', {
    params: { url }
  });

  return {
    type: 'FETCH_REPORT',
    payload: response
  };
};
