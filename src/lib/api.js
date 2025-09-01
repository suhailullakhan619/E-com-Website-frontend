// src/lib/api.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || ''; // empty = same origin
export default axios.create({ baseURL });
