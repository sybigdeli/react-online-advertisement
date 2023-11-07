import { apiClient } from "./request";

const apiGetCurrentUser = (data) => {
  return apiClient.post("auth/me", data);
};

const apiLoginUser = () => {
  return apiClient.post("auth/me");
};

const apiRegisterUser = (data) => {
  return apiClient.get("auth/register", data);
};

const apiAddNewAds = (data) => {
  return apiClient.post("ads/newads" , data);
}

export { apiGetCurrentUser, apiLoginUser, apiRegisterUser , apiAddNewAds};
