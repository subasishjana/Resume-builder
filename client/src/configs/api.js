// import axios from 'axios'

// const api = axios.create({
//     baseURL : import.meta.env.VITE_BASE_URL
// })

// export default api;
// import axios from "axios";

//  export const api = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; // <-- now default export

