import store from "@/store";
import axios from "axios";

const userRequest = axios.create({
  baseURL: "https://86cc-116-241-112-119.jp.ngrok.io/",
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
export const apiGetUserTypeOne = (token) => userRequest.get("/users/1", token);
export const apiGetUserTypeTwo = (token) => userRequest.get("/users/2", token);
export const apiPostAddUser = (data, token) =>
  userRequest.post("/users", data, token);
export const apiPutEditUser = (data, token) => {
  const id = store.getters.editPersonInfoID;
  return userRequest.put(`/users/${id}`, data, token);
};
