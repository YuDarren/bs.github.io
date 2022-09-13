<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { FormRules, ElMessage } from "element-plus";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const ruleFormRef = ref();

    const ruleForm = reactive({
      account: "admin",
      pwd: "1234",
    });

    const rules = reactive({
      account: [
        { required: true, message: "請輸入帳號", trigger: "blur" },
        {
          pattern: /^[a-zA-Z0-9]*$/,
          message: "請輸入英文或數字",
          trigger: "blur",
        },
      ],
      pwd: [
        { required: true, message: "請輸入密碼", trigger: "blur" },
        {
          pattern: /^[a-zA-Z0-9]*$/,
          message: "請輸入英文或數字",
          trigger: "blur",
        },
      ],
    });

    const handSubmit = async (ruleFormRef) => {
      const account = ruleForm.account;
      const pwd = ruleForm.pwd;
      store.commit("updateLoginInfoAcc", account);
      store.commit("updateLoginInfoPwd", pwd);
      if (!ruleFormRef) return;
      try {
        await store.dispatch("handLoginSubmit");
        router.push("/permission/supervisor");
        ElMessage({
          message: "登入成功",
          type: "success",
          customClass: "el-msg",
          duration: 1000,
        });
      } catch (error) {
        ElMessage({
          message: error,
          type: "error",
          customClass: "el-msg",
          duration: 1500,
        });
      }
    };

    return { handSubmit, rules, ruleFormRef, ruleForm };
  },
};
</script>
<template>
  <div class="page">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="login"
      label-width="auto"
      label-position="top"
      hide-required-asterisk="false"
      @keyup.enter="handSubmit(ruleFormRef)"
    >
      <el-form-item>
        <div class="login_tit">歡迎使用後台系統</div>
      </el-form-item>
      <el-form-item label="帳號:" prop="account" class="item">
        <el-input
          v-model="ruleForm.account"
          type="text"
          autocomplete="off"
          maxlength="8"
          placeholder="輸入帳號"
          autofocus
        />
      </el-form-item>
      <el-form-item label="密碼:" prop="pwd" class="item">
        <el-input
          v-model="ruleForm.pwd"
          type="password"
          autocomplete="off"
          maxlength="8"
          placeholder="輸入密碼"
        />
      </el-form-item>
      <el-form-item class="item">
        <el-button type="primary" @click="handSubmit(ruleFormRef)"
          >登入</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
.el-msg {
  z-index: 999 !important;
}
.item .el-form-item__label {
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}
</style>
<style lang="scss" scoped>
.page {
  background: #0275b1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login {
    background: #0275b1;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    padding: 20px;
    line-height: 1.5;
    border: 2px solid #fff;
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
    .el-form-item {
      .el-input {
        width: 200px;
        font-size: 16px;
      }
      .el-button {
        background: #fff;
        font-weight: 700;
        color: #000;
        width: 200px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
      }
    }
  }
}
</style>
