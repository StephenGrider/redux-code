import google from '../apis/google';

export const fetchReport = url => {
  google.get('/runPagespeed', {
    params: { url }
  });
};
