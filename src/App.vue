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

    const lacalToken = localStorage.length;

    return { isLogin, lacalToken };
  },
};
</script>
<template>
  <Login v-if="lacalToken === 0 ? !isLogin : isLogin" />
  <Header v-if="lacalToken === 1 ? !isLogin : isLogin" />
  <router-view v-if="lacalToken === 1 ? !isLogin : isLogin" />
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
