import store from "@/store";
import axios from "axios";

const userRequest = axios.create({
  baseURL: "http://116.241.112.119:4862/",
});
userRequest.interceptors.response.use(
  function (res) {
    console.log("api.res: ", res);
    return res;
  },
  function (error) {
    console.log("api.error: ", error);
    if (error.response.status === 400 && error.response.data.code === 1000) {
      alert(error.response.data.msg);
    } else if (
      error.response.status === 400 &&
      error.response.data.code === 9000
    ) {
      alert("帳號或密碼不得為空");
    } else if (error.response.status != 200) {
      store.dispatch("handSignOutSubmit");
    }

    return Promise.reject(error);
  }
);

// 登入 相關 api
export const apiPostUserLogin = (data) => userRequest.post("/login", data);

// 使用者 相關 api
export const apiGetUserTypeOne = (token) => userRequest.get("/users/1", token);
export const apiGetUserTypeTwo = (token) => userRequest.get("/users/2", token);
export const apiPostAddUser = (token) => userRequest.post("/users", token);
export const apiPutRenewUser = () => userRequest.put("/users{id}");
