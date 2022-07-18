import { createStore } from "vuex";
import axios from "axios";
// import state from "./state.js";
// import actions from "./actions.js";
// import mutations from "./mutations.js";
// import getters from "./getters.js";

export default createStore({
  state: {
    account: String,
    pwd: String,
  },
  actions: {
    handInit({ commit }) {
      axios.get("http://116.241.112.119:4862/").then((res) => {
        commit("init", res.data);
      });
    },
  },
  mutations: {
    init(state, payload) {
      state.account = payload;
      console.log(state.account);
    },
  },
  getters: {},
});
