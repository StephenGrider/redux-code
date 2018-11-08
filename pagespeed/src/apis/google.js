import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/pagespeedonline/v4',
  params: {
    key: 'AIzaSyDkgHxLSNeDXQ-Mq6is8ADPePsy-rp7pug'
  }
});
