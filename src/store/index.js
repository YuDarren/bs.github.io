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
        context.commit("setUserInfo", { username, type });
        context.commit("changeIsLogin", bool);
        context.commit("setToken", token);
        // console.log("vuex.actions.login", res);
      });
    },
    handSignOutSubmit(context) {
      const bool = !context.state.isLogin;
      const account = "";
      const pwd = "";
      context.commit("clearLocalStorage");
      context.commit("updateLoginInfoAcc", account);
      context.commit("updateLoginInfoPwd", pwd);
      context.commit("changeIsLogin", bool);
    },
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
    handAddUserInfo(context) {
      apiPostAddUser(this.state.addPersonInfo, {
        headers: { Authorization: localStorage.token },
      }).then((res) => {});
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
    getUserInfoOne(context) {
      apiGetUserTypeOne({
        headers: { Authorization: localStorage.token },
      }).then((res) => {
        const arr = res.data;
        context.commit("updatePersonInfoOne", arr);
      });
    },
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
      console.log("vuex.muacc.acc =>", account);
    },
    updateLoginInfoPwd(state, pwd) {
      state.loginInfo.pwd = pwd;
      console.log("vuex.mupwd.pwd =>", pwd);
    },
    updatePersonInfoOne(state, payload) {
      state.personInfoOne.personData = payload;
      console.log("vuex.muper.payload =>", payload);
    },
    updatePersonInfoTwo(state, payload) {
      state.personInfoTwo.personData = payload;
      console.log("vuex.muper.payload =>", payload);
    },
    AddPersonInfoAcc(state, account) {
      state.addPersonInfo.account = account;
      console.log("vuex.add.account =>", state.addPersonInfo.account);
    },
    AddPersonInfoPwd(state, pwd) {
      state.addPersonInfo.pwd = pwd;
      console.log("vuex.add.pwd =>", state.addPersonInfo.pwd);
    },
    AddPersonInfoUsername(state, username) {
      state.addPersonInfo.username = username;
      console.log("vuex.add.username =>", state.addPersonInfo.username);
    },
    AddPersonInfoType(state, type) {
      state.addPersonInfo.type = type;
      console.log("vuex.add.type =>", state.addPersonInfo.type);
    },
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
      console.log("vuex.mugetToken =>", token);
    },
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
      console.log("vuex.mugetToken =>", token);
    },
    setUserInfo(state, { username, type }) {
      localStorage.setItem("username", username);
      localStorage.setItem("type", type);
      state.userInfo.username = username;
      state.userInfo.type = type;
    },
    clearLocalStorage() {
      localStorage.clear();
    },
    changeIsLogin(state, bool) {
      state.isLogin = bool;
      console.log("vuex.mulogin =>", bool);
    },
    changeIsAddInfo(state, bool) {
      state.isAddInfo = bool;
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
    addPersonInfo(state) {
      return state.addPersonInfo;
    },
    token(state) {
      return state.token;
    },
  },
});
