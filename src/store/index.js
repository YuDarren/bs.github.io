import { createStore } from "vuex";

import {
  apiPostUserLogin,
  apiGetUserTypeOne,
  apiGetUserTypeTwo,
  apiPostAddUser,
  apiPutEditUser,
} from "../api/api.js";

// import state from "./state.js";
// import actions from "./actions.js";
// import mutations from "./mutations.js";
// import getters from "./getters.js";

export default createStore({
  /*初始值*/
  state: {
    /*登入頁面*/
    isLogin: false,
    /*新增頁面*/
    isAddInfo: false,
    /*編輯頁面*/
    isEdit: false,
    /*接收登入資訊*/
    loginInfo: {
      account: "",
      pwd: "",
    },
    /*使用者登入資訊*/
    userInfo: {
      username: "",
      type: "",
    },
    /*使用者資料for主管*/
    personInfoOne: [],
    /*使用者資料for業務*/
    personInfoTwo: [],
    /*台灣縣市資料*/
    taiwanInfo: [],
    /*接收新增資料*/
    addPersonInfo: {
      account: "",
      pwd: "",
      username: "",
      type: 0,
    },
    /*接收編輯資料*/
    editPersonInfo: {
      id: 0,
      account: "",
      pwd: "",
      username: "",
      type: 0,
    },
    /*接收編輯資料無密碼*/
    editPersonInfoNopwd: {
      id: 0,
      account: "",
      username: "",
      type: 0,
    },
    /*接收登入api暫存的token值*/
    token: "",
  },
  actions: {
    /*控制登入及存取api的token*/
    async handLoginSubmit(context) {
      try {
        await apiPostUserLogin(context.state.loginInfo).then((res) => {
          const token = res.data.token;
          const username = res.data.username;
          const type = res.data.type;
          const bool = !context.state.isLogin;
          context.commit("setUserInfo", { username, type });
          context.commit("changeIsLogin", bool);
          context.commit("setToken", token);
        });
      } catch (error) {
        if (error.response.data.code === 1000) {
          return Promise.reject(error.response.data.msg);
        } else if (error.response.data.code === 9000) {
          return Promise.reject("請輸入帳號或密碼");
        }
      }
    },
    /*控制登出*/
    handSignOutSubmit(context) {
      const bool = !context.state.isLogin;
      const account = "";
      const pwd = "";
      context.commit("clearLocalStorage");
      context.commit("updateLoginInfoAcc", account);
      context.commit("updateLoginInfoPwd", pwd);
      context.commit("changeIsLogin", bool);
    },
    /*若token時效過期，使其登出及關閉新增及編輯頁面*/
    handCloseAllPage(context) {
      const bool = false;
      const account = "";
      const pwd = "";
      const username = "";
      const type = null;
      context.commit("clearLocalStorage");
      context.commit("updateLoginInfoAcc", account);
      context.commit("updateLoginInfoPwd", pwd);
      context.commit("changeIsLogin", !bool);
      context.commit("AddPersonInfoAcc", account);
      context.commit("AddPersonInfoPwd", pwd);
      context.commit("AddPersonInfoUsername", username);
      context.commit("AddPersonInfoType", type);
      context.commit("changeIsAddInfo", bool);
      context.commit("changeIsEdit", bool);
    },
    /*控制新增資料頁面開關按鈕*/
    handAddInfoAction(context) {
      const bool = !context.state.isAddInfo;
      const account = "";
      const pwd = "";
      const username = "";
      const type = null;
      context.commit("AddPersonInfoAcc", account);
      context.commit("AddPersonInfoPwd", pwd);
      context.commit("AddPersonInfoUsername", username);
      context.commit("AddPersonInfoType", type);
      context.commit("changeIsAddInfo", bool);
    },
    /*新增資料按鈕*/
    async handAddUserInfo(context) {
      try {
        await apiPostAddUser(this.state.addPersonInfo, {
          headers: { Authorization: localStorage.token },
        });
        const bool = !context.state.isAddInfo;
        const account = "";
        const pwd = "";
        const username = "";
        const type = null;
        context.commit("AddPersonInfoAcc", account);
        context.commit("AddPersonInfoPwd", pwd);
        context.commit("AddPersonInfoUsername", username);
        context.commit("AddPersonInfoType", type);
        context.commit("changeIsAddInfo", bool);
        context.dispatch("getUserInfoOne");
        context.dispatch("getUserInfoTwo");
      } catch (error) {
        if (error.response.data.code === 2000) {
          return Promise.reject("新增失敗，帳號已存在");
        } else {
          return Promise.reject("欄位不得為空");
        }
      }
    },
    /*控制編輯資料頁面開關按鈕*/
    handEditInfoAction(context) {
      const bool = !context.state.isEdit;
      context.commit("changeIsEdit", bool);
    },
    /*編輯資料按鈕*/
    async handEditUserInfo(context) {
      const arr = context.state.editPersonInfo;
      try {
        await apiPutEditUser(arr, {
          headers: { Authorization: localStorage.token },
        });
        const bool = !context.state.isEdit;
        const pwd = "";
        context.commit("changeIsEdit", bool);
        context.commit("editPersonInfoPwd", pwd);
        context.dispatch("getUserInfoOne");
        context.dispatch("getUserInfoTwo");
      } catch (error) {
        if (error.response.data.code === 2000) {
          return Promise.reject("編輯失敗，帳號已存在");
        } else {
          return Promise.reject("欄位不得為空");
        }
      }
    },
    /*取得使用者資料for主管*/
    getUserInfoOne(context) {
      apiGetUserTypeOne({
        headers: { Authorization: localStorage.token },
      }).then((res) => {
        const arr = res.data;
        context.commit("updatePersonInfoOne", arr);
      });
    },
    /*取得使用者資料for業務*/
    getUserInfoTwo(context) {
      apiGetUserTypeTwo({
        headers: { Authorization: localStorage.token },
      }).then((res) => {
        const arr = res.data;
        context.commit("updatePersonInfoTwo", arr);
      });
    },
  },
  mutations: {
    updateLoginInfoAcc(state, account) {
      state.loginInfo.account = account;
    },
    updateLoginInfoPwd(state, pwd) {
      state.loginInfo.pwd = pwd;
    },
    /*更新主管資料*/
    updatePersonInfoOne(state, payload) {
      state.personInfoOne = payload;
    },
    /*更新員工資料*/
    updatePersonInfoTwo(state, payload) {
      state.personInfoTwo = payload;
    },
    /*更新員工資料*/
    getTaiwanInfo(state, payload) {
      state.taiwanInfo = payload;
    },
    /*新增資料帳號*/
    AddPersonInfoAcc(state, account) {
      state.addPersonInfo.account = account;
    },
    /*新增資料密碼*/
    AddPersonInfoPwd(state, pwd) {
      state.addPersonInfo.pwd = pwd;
      console.log("vuex.add.pwd =>", state.addPersonInfo.pwd);
    },
    /*新增資料使用者名稱*/
    AddPersonInfoUsername(state, username) {
      state.addPersonInfo.username = username;
    },
    /*新增資料類別*/
    AddPersonInfoType(state, type) {
      state.addPersonInfo.type = type;
    },
    /*編輯資料ID*/
    editPersonInfoID(state, id) {
      state.editPersonInfo.id = id;
    },
    /*編輯資料帳號*/
    editPersonInfoAcc(state, account) {
      state.editPersonInfo.account = account;
      state.editPersonInfoNopwd.account = account;
    },
    /*編輯資料密碼*/
    editPersonInfoPwd(state, pwd) {
      state.editPersonInfo.pwd = pwd;
    },
    /*編輯資料使用者名稱*/
    editPersonInfoUsername(state, username) {
      state.editPersonInfo.username = username;
      state.editPersonInfoNopwd.username = username;
    },
    /*編輯資料類別*/
    editPersonInfoType(state, type) {
      state.editPersonInfo.type = type;
      state.editPersonInfoNopwd.type = type;
    },
    /*存取api的token至localStorage*/
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
    },
    /*存取使用者名稱及職位至localStorage*/
    setUserInfo(state, { username, type }) {
      localStorage.setItem("username", username);
      localStorage.setItem("type", type);
      state.userInfo.username = username;
      state.userInfo.type = type;
    },
    /*清空localStorage內所有資料*/
    clearLocalStorage() {
      localStorage.clear();
    },
    /* */
    changeIsLogin(state, bool) {
      state.isLogin = bool;
    },
    changeIsAddInfo(state, bool) {
      state.isAddInfo = bool;
    },
    changeIsEdit(state, bool) {
      state.isEdit = bool;
    },
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    isAddInfo(state) {
      return state.isAddInfo;
    },
    isEdit(state) {
      return state.isEdit;
    },
    loginInfoAcc(state) {
      return state.loginInfo.account;
    },
    loginInfoPwd(state) {
      return state.loginInfo.pwd;
    },
    userInfoUsername(state) {
      return state.userInfo.username;
    },
    userInfoUsertype(state) {
      return state.userInfo.type;
    },
    personInfoOne(state) {
      return state.personInfoOne;
    },
    personInfoTwo(state) {
      return state.personInfoTwo;
    },
    editPersonInfoID(state) {
      return state.editPersonInfo.id;
    },
    /*新增資料 */
    addPersonInfo(state) {
      return state.addPersonInfo;
    },
    /*新增資料帳號*/
    addPersonInfoAcc(state) {
      return state.addPersonInfo.account;
    },
    /*新增資料密碼*/
    addPersonInfoPwd(state) {
      return state.addPersonInfo.pwd;
    },
    /*新增資料使用者名稱*/
    addPersonInfoUsername(state) {
      return state.addPersonInfo.username;
    },
    /*新增資料職位*/
    addPersonInfoType(state) {
      return state.addPersonInfo.type;
    },
    token(state) {
      return state.token;
    },
  },
});
