<script>
import { useStore } from "vuex";
export default {
  components: {},
  computed: {
    AddPersonInfoAcc: {
      get() {
        return this.$store.state.addPersonInfo.account;
      },
      set(value) {
        this.$store.commit("AddPersonInfoAcc", value);
      },
    },
    AddPersonInfoPwd: {
      get() {
        return this.$store.state.addPersonInfo.pwd;
      },
      set(value) {
        this.$store.commit("AddPersonInfoPwd", value);
      },
    },
    AddPersonInfoUsername: {
      get() {
        return this.$store.state.addPersonInfo.username;
      },
      set(value) {
        this.$store.commit("AddPersonInfoUsername", value);
      },
    },
    AddPersonInfo: {
      get() {
        return this.$store.state.addPersonInfo.account;
      },
      set(value) {
        this.$store.commit("AddPersonInfo", value);
      },
    },
  },
  setup() {
    const store = useStore();
    const isAddInfoBtn = () => {
      store.dispatch("handAddInfoAction");
    };
    return { isAddInfoBtn };
  },
};
</script>
<template>
  <div class="add_block">
    <form class="add_window">
      <div class="add_tit">新增人事資料</div>
      <div class="add_con">
        <div class="add_input">
          新增帳號:<el-input
            v-model="AddPersonInfoAcc"
            type="text"
            placeholder="輸入使用者帳號"
          />
        </div>
        <div class="add_input">
          新增密碼:
          <el-input
            v-model="AddPersonInfoPwd"
            type="text"
            placeholder="輸入使用者密碼"
          />
        </div>
        <div class="add_input">
          新增姓名:
          <el-input
            v-model="AddPersonInfoUsername"
            type="text"
            placeholder="輸入姓名"
          />
        </div>
        <div class="add_input">
          新增職位:
          <el-input
            v-model="AddPersonInfoUsername"
            type="text"
            placeholder="輸入職位"
          />
        </div>
      </div>
      <div class="add_btns">
        <el-button type="info" plain>確定</el-button>
        <el-button type="info" plain @click="isAddInfoBtn">取消</el-button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.add_block {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  right: 0px;
  z-index: 998;
  backdrop-filter: blur(5px);
  .add_window {
    width: 400px;
    height: 450px;
    background: #d0d0d0;
    border: 2px solid #000000;
    .add_tit {
      color: #000000;
      line-height: 1.5;
      font-size: 18px;
      font-weight: 700;
      border-bottom: 2px solid #000000;
      padding: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .add_con {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .add_input + .add_input {
        margin-top: 10px;
      }
    }
    .add_btns {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
