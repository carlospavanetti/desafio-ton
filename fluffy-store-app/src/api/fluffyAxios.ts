import Axios from 'axios';

const FluffyAxios = Axios.create({
  baseURL: 'https://rw32403vl3.execute-api.us-east-1.amazonaws.com/dev',
});

export default FluffyAxios;
