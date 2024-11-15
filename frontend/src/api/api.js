import axios from 'axios';

// Set up base URL for API requests
const API = axios.create({
  baseURL: 'http://localhost:5000', // Adjust the URL to your backend server
});

// Add a request interceptor to add authentication headers if needed
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle error responses globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized errors (status code 401)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default API;

