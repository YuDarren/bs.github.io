<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
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
