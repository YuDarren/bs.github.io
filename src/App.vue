<script>
import Header from "@/components/Header.vue";
// import { onMounted } from "@vue/runtime-core";
// import { useStore } from "vuex";
import axios from "axios";
export default {
  components: { Header },
  setup() {
    axios
      .post("http://116.241.112.119:4862/login", {
        account: "admin",
        pwd: "1234",
      })
      .then((res) => {
        console.log(res);
      });
    // const store = useStore();
    // const init = () => {
    //   store.dispatch("handInit");
    // };
    // onMounted(() => {
    //   init();
    // });
    return {};
  },
};
</script>
<template>
  <Header />
  <router-view />
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
