import { createStore } from "vuex";
import { apiPostUserLogin, userRequest } from "../api/api.js";
// import state from "./state.js";
// import actions from "./actions.js";
// import mutations from "./mutations.js";
// import getters from "./getters.js";

export default createStore({
  state: {
    isLogin: false,
    loginInfo: {
      account: "",
      pwd: "",
    },
    token: localStorage.token,
  },
  actions: {
    handLoginSubmit(context) {
      apiPostUserLogin(this.state.loginInfo).then((res) => {
        const token = res.data.token;
        const bool = !context.state.isLogin;
        console.log("action.bool=>", bool);
        context.commit("changeIsLogin", bool);
        context.commit("setToken", token);
        console.log("vuex.mutoken =>", localStorage.length);
      });
    },
    handSignOutSubmit(context) {
      const bool = !context.state.isLogin;
      context.commit("removeToken");
      context.commit("changeIsLogin", bool);
    },
  },
  mutations: {
    updateLoginInfoAcc(state, account) {
      state.loginInfo.account = account;
      console.log("vuex.muacc.acc =>", account);
      console.log("vuex.muacc.acc =>", localStorage.length);
    },
    updateLoginInfoPwd(state, pwd) {
      state.loginInfo.pwd = pwd;
      console.log("vuex.mupwd.pwd =>", pwd);
    },
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
      console.log("vuex.mutoken =>", token);
    },
    removeToken(state, token) {
      localStorage.removeItem("token");
      state.token = token;
      console.log("vuex.mutoken =>", localStorage.length);
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
    loginInfoAcc(state) {
      return state.loginInfo.account;
    },
    loginInfoPwd(state) {
      return state.loginInfo.pwd;
    },
    token(state) {
      return state.token;
    },
  },
});
