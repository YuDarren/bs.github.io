import { createStore } from "vuex";
import { apiPostUserLogin, apiGetUserType } from "../api/api.js";
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
    userInfo: {
      username: "",
      type: "",
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
        context.commit("updateUserInfo", { username, type });
        context.commit("changeIsLogin", bool);
        context.commit("setToken", token);
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
      console.log("vuex.mutoken =>", localStorage.token);
    },
    handlog(context) {
      apiPostUserLogin(this.state.loginInfo).then((res) => {
        console.log("vuex.acions=>", this.state.userInfo);
        console.log("vuex.acions=>", res.status);
        console.log("vuex.acions.loginInfo=>", this.state.loginInfo);
      });
    },
    // getUserInfo(context) {
    //   const token = context.state.token;

    //   apiGetUserType({ value: token }).then((res) => {});
    // },
    cleanLoginInfo({ commit }) {
      const account = "";
      const pwd = "";
      commit("updateLoginInfoAcc", account);
      commit("updateLoginInfoPwd", pwd);
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
    updateUserInfo(state, { username, type }) {
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
        default:
          alert("沒有符合的條件");
      }
      console.log("vuex.mutations.user=>", this.state.userInfo);
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
    token(state) {
      return state.token;
    },
  },
});
