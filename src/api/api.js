import store from "@/store";
import axios from "axios";

const userRequest = axios.create({
  baseURL: "https://a4ad-116-241-112-119.jp.ngrok.io",
});

userRequest.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response.status === 403) {
      store.dispatch("handCloseAllPage");
    }

    return Promise.reject(error);
  }
);

// 登入 相關 api
export const apiPostUserLogin = (data) => userRequest.post("/login", data);

// 使用者 相關 api
export const apiPostUserTypeOne = (data, token) =>
  userRequest.post("/users/1", data, token);
export const apiPostUserTypeTwo = (data, token) =>
  userRequest.post("/users/2", data, token);
export const apiPostAddUser = (data, token) =>
  userRequest.post("/users", data, token);
export const apiPutEditUser = (data, token) => {
  const id = store.getters.editPersonInfoID;
  return userRequest.put(`/users/${id}`, data, token);
};
