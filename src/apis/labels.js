import axios from 'axios';
import { BASE_URL } from '../constants';

export const createLabel = ({ title, content }) => axios.post(`${BASE_URL}labels`, { title, content });
export const getLabels = () => axios.get(`${BASE_URL}labels`);
export const getLabelById = (id) => axios.get(`${BASE_URL}labels/${id}`);
export const updateLabel = ({ id, title, content }) => axios.put(`${BASE_URL}labels/${id}`, { title, content });
export const deleteLabel = (id) => axios.delete(`${BASE_URL}labels/${id}`);