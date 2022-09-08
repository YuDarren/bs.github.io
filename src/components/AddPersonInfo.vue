<script>
import { useStore } from "vuex";
import { reactive, ref } from "vue";
import { FormRules, ElMessage } from "element-plus";

export default {
  setup() {
    const store = useStore();
    const options = [
      {
        value: 1,
        label: "業務主管",
      },
      {
        value: 2,
        label: "業務員",
      },
    ];
    const ruleFormRef = ref();

    const ruleForm = reactive({
      account: "",
      pwd: "",
      username: "",
      type: null,
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
      username: [
        { required: true, message: "請輸入使用者名稱", trigger: "blur" },
        {
          pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]*$/,
          message: "請勿使用特殊字元",
          trigger: "blur",
        },
      ],
      type: [{ required: true, message: "請選擇職位", trigger: "blur" }],
    });

    const submitForm = async (ruleFormRef) => {
      const account = ruleForm.account;
      const pwd = ruleForm.pwd;
      const username = ruleForm.username;
      const type = ruleForm.type;
      store.commit("AddPersonInfoAcc", account);
      store.commit("AddPersonInfoPwd", pwd);
      store.commit("AddPersonInfoUsername", username);
      store.commit("AddPersonInfoType", type);
      if (!ruleFormRef) return;
      try {
        await store.dispatch("handAddUserInfo");
        ElMessage({
          message: "新增成功",
          type: "success",
          customClass: "el-msg",
        });
      } catch (error) {
        console.log(error);
        ElMessage({
          message: error,
          type: "error",
          customClass: "el-msg",
        });
      }
    };

    const resetForm = (ruleFormRef) => {
      if (!ruleFormRef) return;
      ruleFormRef.resetFields();
    };

    const isAddInfoCancel = () => {
      store.dispatch("handAddInfoAction");
    };

    return {
      isAddInfoCancel,
      options,
      rules,
      resetForm,
      submitForm,
      ruleFormRef,
      ruleForm,
    };
  },
};
</script>
<template>
  <div class="add_block">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="add_window"
      label-width="auto"
      label-position="top"
    >
      <div class="add_tit">新增人事資料</div>
      <el-form-item class="add_input" label="新增帳號" prop="account">
        <el-input
          v-model="ruleForm.account"
          type="text"
          autocomplete="off"
          maxlength="8"
        />
      </el-form-item>
      <el-form-item class="add_input" label="新增密碼" prop="pwd">
        <el-input
          v-model="ruleForm.pwd"
          type="text"
          autocomplete="off"
          maxlength="8"
        />
      </el-form-item>
      <el-form-item class="add_input" label="新增使用者名稱" prop="username">
        <el-input
          v-model="ruleForm.username"
          type="text"
          autocomplete="off"
          maxlength="8"
        />
      </el-form-item>
      <el-form-item class="add_input" label="新增職位" prop="type">
        <el-select
          v-model="ruleForm.type"
          placeholder="--請選擇職位--"
          clearable
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item class="add_btns">
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >新增</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">清除</el-button>
        <el-button @click="isAddInfoCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
.el-msg {
  z-index: 999 !important;
}
</style>

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
  z-index: 900;
  backdrop-filter: blur(5px);

  .add_window {
    width: 370px;
    height: 480px;
    background: #f0f0f0;
    border: 2px solid #adadad;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    .add_tit {
      color: #6c6c6c;
      line-height: 1.5;
      font-size: 18px;
      font-weight: 700;
      width: 370px;
      border-bottom: 2px solid #adadad;
      padding: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .el-input {
      width: 200px;
    }

    .el-select {
      width: 200px;
    }

    .add_btns {
      display: flex;
      align-items: center;
      .el-button {
        margin: 10px 20px;
      }
    }
  }
}
</style>
