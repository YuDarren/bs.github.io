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
    <div class="login">
      <div class="login_tit">歡迎使用後台系統</div>
      <div class="login_info">
        <div class="input-box">
          <p>帳號 :</p>
          <input
            type="text"
            placeholder="輸入帳號"
            v-model="loginInfoAcc"
            autofocus
          />
        </div>
        <div class="input-box">
          <p>密碼 :</p>
          <input type="text" placeholder="輸入密碼" v-model="loginInfoPwd" />
        </div>
        <a class="login_btn" @click="handSubmit">送出</a>
      </div>
    </div>
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
    padding: 10px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .login_tit {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 700;
      color: #fff;
    }
    .login_info {
      color: #fff;
      margin-bottom: 20px;

      .input-box {
        width: 100% auto;
        margin-bottom: 30px;
        p {
          width: 100% auto;
          font-size: 16px;
          font-weight: 700;
          margin: 10px 0px;
        }
        input {
          width: 100% auto;
          font-size: 16px;
          outline: none;
        }
      }
      .login_btn {
        cursor: pointer;
        background: #fff;
        font-weight: 700;
        color: #000;
        border: 2px solid #000;
        width: 100% auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
      }
    }
  }
}
</style>
