import axios from "axios";

const createRequest = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 15000,
  });

  instance.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  });

  return instance;
};

const apiClient = createRequest(import.meta.env.VITE_API_BASE_URL);

export { apiClient };
