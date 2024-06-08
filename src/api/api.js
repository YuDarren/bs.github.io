import store from "@/store";
import axios from "axios";
import router from "vue-router";

const userRequest = axios.create({
  baseURL: "https://5141-123-240-238-24.ngrok-free.app/",
});

userRequest.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response.status === 403) {
      store.dispatch("handCloseAllPage");
      router.push("/");
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
