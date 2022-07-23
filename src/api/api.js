import axios from "axios";

const userRequest = axios.create({
  baseURL: "http://116.241.112.119:4862/",
});

// 登入 相關 api
export const apiPostUserLogin = (data) => userRequest.post("/login", data);

// 使用者 相關 api
export const apiGetUserType = (data) => userRequest.get("/users{type}", data);
export const apiPostAddUser = (data) => userRequest.post("/users", data);
export const apiPutRenewUser = () => userRequest.put("/users{id}");
