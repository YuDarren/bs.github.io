<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AddPersonInfo from "@/components/AddPersonInfo.vue";

export default {
  components: { AddPersonInfo },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAddInfo = computed(() => {
      return store.getters.isAddInfo;
    });
    const isAddInfoBtn = () => {
      store.dispatch("handAddInfoAction");
    };

    onMounted(() => {
      store.dispatch("getUserInfoOne");
      store.dispatch("getUserInfoTwo");
      router.push("/permission/supervisor");
    });
    return { isAddInfo, isAddInfoBtn, open };
  },
};
</script>
<template>
  <div class="per">
    <nav class="per_haeder">
      <div class="per_btns">
        <div class="btn">
          <router-link to="/permission/supervisor">主管</router-link>
        </div>
        <div class="btn">
          <router-link to="/permission/employee">業務</router-link>
        </div>
      </div>
      <div class="addinfo_btn">
        <el-button color="#0275b1" @click="isAddInfoBtn">新增</el-button>
      </div>
    </nav>
    <AddPersonInfo v-if="isAddInfo" />
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.per {
  padding: 40px 0px;
  margin: 0 auto;
  width: calc(100% - 300px);
  max-width: 1920px;
  display: flex;
  flex-direction: column;

  .per_haeder {
    display: flex;
    align-items: center;
    width: 100% auto;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 20px;
    .per_btns {
      display: flex;
      align-items: center;
      .btn {
        display: flex;
        align-items: center;

        font-weight: 600;
        a {
          border: 1px solid#f4f4f4;
          color: #0275b1;
          padding: 10px 30px;
          border-radius: 4px;
          &.router-link-exact-active {
            padding: 10px 30px;
            color: #fff;
            background: #e0e0e0;
            border-radius: 4px;
          }
        }
      }
      .btn + .btn {
        margin-left: 10px;
      }
    }
    .addinfo_btn {
      display: flex;
      align-items: center;

      .el-button {
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 600;
      }
    }
  }
}
</style>
