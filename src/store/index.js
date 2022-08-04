import { createStore } from "vuex";
import {
  apiPostUserLogin,
  apiGetUserTypeOne,
  apiGetUserTypeTwo,
  apiPostAddUser,
} from "../api/api.js";
// import state from "./state.js";
// import actions from "./actions.js";
// import mutations from "./mutations.js";
// import getters from "./getters.js";

export default createStore({
  state: {
    isLogin: false,
    isAddInfo: false,
    loginInfo: {
      account: "",
      pwd: "",
    },
    userInfo: {
      username: "",
      type: "",
    },
    personInfoOne: {
      personData: {
        id: "",
        account: "",
        username: "",
        type: "",
        addTime: "",
        updateTime: "",
      },
    },
    personInfoTwo: {
      personData: {
        id: "",
        account: "",
        username: "",
        type: "",
        addTime: "",
        updateTime: "",
      },
    },
    addPersonInfo: {
      account: "",
      pwd: "",
      username: "",
      type: 0,
    },
    token: "",
  },
  actions: {
    handLoginSubmit(context) {
      apiPostUserLogin(context.state.loginInfo).then((res) => {
        const token = res.data.token;
        const username = res.data.username;
        const type = res.data.type;
        const bool = !context.state.isLogin;
        context.commit("getLoginUserInfo", { username, type });
        context.commit("changeIsLogin", bool);
        context.commit("setToken", token);
        console.log("vuex.actions.login", res);
      });
    },
    handSignOutSubmit(context) {
      const bool = !context.state.isLogin;
      const token = context.state.token;
      const account = "";
      const pwd = "";
      context.commit("removeToken", token);
      context.commit("updateLoginInfoAcc", account);
      context.commit("updateLoginInfoPwd", pwd);
      context.commit("changeIsLogin", bool);
    },
    getUserInfoOne(context) {
      apiGetUserTypeOne({
        headers: { Authorization: localStorage.token },
      }).then((res) => {
        const arr = res.data;
        context.commit("updatePersonInfoOne", arr);
        console.log("vuex.actions.getUserone.res", res.data);
        console.log("vuex.actions.getUserone.arr", arr);
      });
    },
    getUserInfoTwo(context) {
      apiGetUserTypeTwo({
        headers: { Authorization: localStorage.token },
      }).then((res) => {
        const arr = res.data;
        context.commit("updatePersonInfoTwo", arr);
        console.log("vuex.actions.getUserTwo", res);
      });
    },
    addUserInfo(context) {
      apiPostAddUser({
        headers: { Authorization: localStorage.token },
      }).then((res) => {
        console.log(res);
      });
    },
  },
  mutations: {
    updateLoginInfoAcc(state, account) {
      state.loginInfo.account = account;
      console.log("vuex.muacc.acc =>", account);
    },
    updateLoginInfoPwd(state, pwd) {
      state.loginInfo.pwd = pwd;
      console.log("vuex.mupwd.pwd =>", pwd);
    },
    getLoginUserInfo(state, { username, type }) {
      state.userInfo.username = username;
      state.userInfo.type = type;
      switch (state.userInfo.type) {
        case 0:
          state.userInfo.type = "管理員";
          break;
        case 1:
          state.userInfo.type = "業務主管";
          break;
        case 2:
          state.userInfo.type = "業務";
          break;
      }
      console.log("vuex.mutations.user=>");
    },
    updatePersonInfoOne(state, payload) {
      state.personInfoOne.personData = payload;
      // switch (state.personInfoOne.personData.type) {
      //   case 0:
      //     state.personInfoOne.personData.type = "管理員";
      //     break;
      //   case 1:
      //     state.personInfoOne.personData.type = "業務主管";
      //     break;
      //   case 2:
      //     state.personInfoOne.personData.type = "業務";
      //     break;
      // }
      console.log("vuex.muper.payload =>", payload);
    },
    updatePersonInfoTwo(state, payload) {
      state.personInfoTwo.personData = payload;
      console.log("vuex.muper.payload =>", payload);
    },
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
      console.log("vuex.mugetToken =>", token);
    },
    removeToken(state, token) {
      localStorage.removeItem("token");
      state.token = token;
      console.log("vuex.mugetToken =>", token);
    },
    changeIsLogin(state, bool) {
      state.isLogin = bool;
      console.log("vuex.mulogin =>", bool);
    },
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    isAddInfo(state) {
      return state.isAddInfo;
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
      return state.personInfoOne.personData;
    },
    personInfoTwo(state) {
      return state.personInfoTwo.personData;
    },
    token(state) {
      return state.token;
    },
  },
});
