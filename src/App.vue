<script>
import Header from "@/components/Header.vue";
import Login from "@/views/Login.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  components: { Header, Login },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLogin = computed(() => {
      return store.getters.isLogin;
    });
    const token = localStorage.token;
    onMounted(() => {
      router.push("/permission/supervisor");
    });

    return { isLogin, token };
  },
};
</script>
<template>
  <Login v-if="token ? isLogin : !isLogin" />
  <Header v-if="token ? !isLogin : isLogin" />
  <router-view v-if="token ? !isLogin : isLogin" />
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
