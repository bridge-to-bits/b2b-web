import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  paramsSerializer: (params) => {
    return Object.keys(params)
      .map(key => {
        if (params[key] === undefined) { return ''; }
        if (Array.isArray(params[key])) {
          return params[key].map(value => `${key}=${value}`).join('&');
        }
        return `${key}=${params[key]}`;
      })
      .join('&');
  }
});

export { instance };

