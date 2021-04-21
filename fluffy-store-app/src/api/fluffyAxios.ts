import Axios from 'axios';
import Constants from 'expo-constants';

const FluffyAxios = Axios.create({
  baseURL: Constants.manifest.configurations.backendURL,
});

export default FluffyAxios;
