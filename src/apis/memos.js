import axios from 'axios';
import { BASE_URL } from '../constants';

export const createMemo = ({ title, content }) => axios.post(`${BASE_URL}memos`, { title, content });
export const getMemos = () => axios.get(`${BASE_URL}memos`);
export const getMemoById = (id) => axios.get(`${BASE_URL}memos/${id}`);
export const updateMemo = ({ id, title, content }) => axios.put(`${BASE_URL}memos/${id}`, { title, content });
export const deleteMemo = (id) => axios.delete(`${BASE_URL}memos/${id}`);