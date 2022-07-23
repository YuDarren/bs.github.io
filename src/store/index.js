import { createStore } from "vuex";
import { apiPostUserLogin } from "../api/api.js";
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
        context.state.token = token;
        const bool = !context.state.isLogin;
        context.commit("changeIsLogin", bool);
        context.commit("updateToken", token);
        localStorage.setItem("token", token);
        console.log("vuex.islogin=>", this.state.isLogin);
        console.log("vuex.token=>", token);
        console.log("vuex.getter=>", this.getters.token);
      });
    },
    // handSubmit = () => {
    //   apiPostUserLogin(logininfo).then((res) => {
    //     localStorage.setItem("token", res.data.token);
    //     console.log(localStorage);
    //     if (localStorage) {
    //       alert("目前已登入");
    //     }
    //   });
    // };
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
    updateToken(state, token) {
      state.token = token;
      console.log("vuex.mutoken =>", token);
    },
    changeIsLogin(state, bool) {
      state.isLogin = bool;
    },
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    loginInfo(state) {
      return state.loginInfo;
    },
    token(state) {
      return state.token;
    },
  },
});
