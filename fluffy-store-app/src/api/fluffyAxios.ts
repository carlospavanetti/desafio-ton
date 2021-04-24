import Axios from 'axios';
import Constants from 'expo-constants';

const baseURL = (Constants.manifest.extra || {}).backendURL;
const FluffyAxios = Axios.create({ baseURL });

export default FluffyAxios;
