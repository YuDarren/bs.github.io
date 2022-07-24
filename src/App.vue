<script>
import Header from "@/components/Header.vue";
import Login from "@/views/Login.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  components: { Header, Login },
  setup() {
    const store = useStore();
    const isLogin = computed(() => {
      return store.getters.isLogin;
    });

    return { isLogin };
  },
  computed: {
    onchangeIsLogin() {
      store.commit("changeIsLogin");
    },
  },
};
</script>
<template>
  <Login v-if="!isLogin" />
  <Header v-if="isLogin" />
  <router-view v-if="isLogin" />
</template>

<style lang="scss">
body {
  background: #fff;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
