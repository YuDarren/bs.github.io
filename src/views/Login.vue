<script>
import { useStore } from "vuex";

export default {
  computed: {
    loginInfoAcc: {
      get() {
        return this.$store.state.loginInfo.account;
      },
      set(value) {
        this.$store.commit("updateLoginInfoAcc", value);
      },
    },
    loginInfoPwd: {
      get() {
        return this.$store.state.loginInfo.pwd;
      },
      set(value) {
        this.$store.commit("updateLoginInfoPwd", value);
      },
    },
  },

  setup() {
    const store = useStore();
    const handSubmit = () => {
      store.dispatch("handLoginSubmit");
    };

    return { handSubmit };
  },
};
</script>
<template>
  <div class="page">
    <form class="login" @keyup.enter="handSubmit">
      <div class="login_tit">歡迎使用後台系統</div>
      <div class="login_info">
        <div class="input-box">
          <p>帳號 :</p>
          <el-input
            type="text"
            placeholder="輸入帳號"
            v-model="loginInfoAcc"
            autofocus
          />
        </div>
        <div class="input-box">
          <p>密碼 :</p>
          <el-input type="text" placeholder="輸入密碼" v-model="loginInfoPwd" />
        </div>
        <el-button type="primary" @click="handSubmit">送出</el-button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.page {
  background: #0000c6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login {
    background: #000093;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    padding: 20px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .login_tit {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 10px;
    }
    .login_info {
      color: #fff;
      margin-bottom: 20px;

      .input-box {
        width: 100% auto;
        margin-bottom: 20px;
        p {
          width: 100%;
          font-size: 16px;
          font-weight: 700;
          margin: 10px 0px;
        }
        .el-input {
          width: 100%;
          font-size: 16px;
        }
      }
      .input-box + .el-button {
        margin-top: 10px;
      }
      .el-button {
        background: #fff;
        font-weight: 700;
        color: #000;
        border: 2px solid #000;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
      }
    }
  }
}
</style>
