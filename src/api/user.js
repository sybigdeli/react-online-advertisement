import { apiClient } from "./request";

const apiGetCurrentUser = (data) => {
  return apiClient.get("auth/me", data);
};

const apiLoginUser = () => {
  return apiClient.post("auth/me");
};

const apiRegisterUser = (data) => {
  return apiClient.post("auth/register", data);
};

const apiAddNewAds = (data) => {
  return apiClient.post("ads/me" , data);
}

export { apiGetCurrentUser, apiLoginUser, apiRegisterUser , apiAddNewAds};
