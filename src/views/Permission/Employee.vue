<script>
import { computed, onMounted, onBeforeUpdate } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const personnelList = store.getters.personInfoTwo;
    const handgetUserInfoTwo = () => {
      store.dispatch("getUserInfoTwo");
    };
    onMounted(() => {
      handgetUserInfoTwo();
      console.log("主管清單=>", personnelList);
    });

    return { personnelList };
  },
};
</script>
<template>
  <div class="userinfo" v-for="item in personnelList" :key="item.id">
    <div class="id">員工編號:{{ item.id }}</div>
    <div class="username">姓名:{{ item.username }}</div>
    <div class="type">職位:{{ item.type }}</div>
    <div class="account">帳號:{{ item.account }}</div>
  </div>
</template>
<style lang="scss" scoped>
.userinfo {
  border: 1px solid #000000;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  .name {
    flex: 1;
  }
  .jobtit {
    flex: 1;
  }
  .phone {
    flex: 1;
  }
  .email {
    flex: 1;
  }
}
.userinfo + .userinfo {
  margin-top: 20px;
}
</style>
