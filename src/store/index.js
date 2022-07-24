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
    token: "",
  },
  actions: {
    handLoginSubmit(context) {
      apiPostUserLogin(this.state.loginInfo).then((res) => {
        const token = res.data.token;
        const bool = !context.state.isLogin;
        localStorage.setItem("token", token);
        context.state.token = token;
        console.log("action.bool=>", bool);

        context.commit("changeIsLogin", bool);
        context.commit("updateToken", token);
      });
    },
  },
  mutations: {
    updateLoginInfoAcc(state, account) {
      state.loginInfo.account = account;
      console.log("vuex.muacc.acc =>", account);
      console.log("vuex.muacc.acc =>", localStorage.token);
    },
    updateLoginInfoPwd(state, pwd) {
      state.loginInfo.pwd = pwd;
      console.log("vuex.mupwd.pwd =>", pwd);
    },
    updateToken(state, token) {
      state.token = token;
      console.log("vuex.mutoken =>", token);
    },
    changeIsLogin(state, bool) {
      state.isLogin = bool;
      if (localStorage.token) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }

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
