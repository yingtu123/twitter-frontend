import axios from 'axios';

const domain = 'http://localhost:3333';

axios.interceptors.request.use((config) => {
  // eslint-disable-next-line no-console
  console.log('Request URL:', config.url); // 先输出调试信息

  return {
    ...config,
    url: domain + config.url, // 返回修改后的配置对象
  };
});

axios.interceptors.response.use((response) => response.data, (err) => Promise.reject(err));

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

export const put = (url, params) => axios.put(url, params);

export const del = (url, params) => axios.delete(url, params);
