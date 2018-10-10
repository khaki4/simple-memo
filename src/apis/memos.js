import axios from 'axios';
import { BASE_URL } from '../constants';

export const getMemos = () => axios.get(`${BASE_URL}memos`);

export default {};