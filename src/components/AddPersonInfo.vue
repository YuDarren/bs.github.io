<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { apiPostAddUser } from "../api/api.js";
export default {
  components: {},
  computed: {
    AddPersonInfoAcc: {
      get() {
        const reg = /^[a-zA-Z0-9]*$/;
        if (!reg.test(this.$store.state.addPersonInfo.account)) {
          alert("請輸入英文字母或數字");
        } else {
          return this.$store.state.addPersonInfo.account;
        }
      },
      set(value) {
        this.$store.commit("AddPersonInfoAcc", value);
      },
    },
    AddPersonInfoPwd: {
      get() {
        const reg = /^[a-zA-Z0-9]*$/;
        if (!reg.test(this.$store.state.addPersonInfo.pwd)) {
          alert("請輸入英文字母或數字");
        } else {
          return this.$store.state.addPersonInfo.pwd;
        }
      },
      set(value) {
        this.$store.commit("AddPersonInfoPwd", value);
      },
    },
    AddPersonInfoUsername: {
      get() {
        const reg = /^[a-zA-Z0-9\u4e00-\u9fa5]*$/;
        if (!reg.test(this.$store.state.addPersonInfo.username)) {
          alert("請輸入英文字母或數字");
        } else {
          return this.$store.state.addPersonInfo.username;
        }
      },
      set(value) {
        this.$store.commit("AddPersonInfoUsername", value);
      },
    },
    AddPersonInfoType: {
      get() {
        return this.$store.state.addPersonInfo.type;
      },
      set(value) {
        this.$store.commit("AddPersonInfoType", value);
      },
    },
  },
  setup() {
    const store = useStore();
    const addInfo = computed(() => {
      return store.getters.addPersonInfo;
    });
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
    const isAddInfoCancel = () => {
      store.dispatch("handAddInfoAction");
    };
    const addNewUserInfo = () => {
      store.dispatch("handAddUserInfo");
    };

    return { isAddInfoCancel, addNewUserInfo, options };
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
            maxlength="8"
            type="text"
            placeholder="輸入使用者帳號"
          />
        </div>
        <div class="add_input">
          新增密碼:
          <el-input
            v-model="AddPersonInfoPwd"
            maxlength="8"
            type="text"
            placeholder="輸入使用者密碼"
          />
        </div>
        <div class="add_input">
          新增姓名:
          <el-input
            v-model="AddPersonInfoUsername"
            maxlength="8"
            type="text"
            placeholder="輸入姓名"
          />
        </div>
        <div class="add_input">
          新增職位:
          <el-select
            v-model="AddPersonInfoType"
            placeholder="--請選擇--"
            clearable
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="add_btns">
        <el-button type="info" plain @click="addNewUserInfo">確定</el-button>
        <el-button type="info" plain @click="isAddInfoCancel">取消</el-button>
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
      .add_input {
        display: flex;
        flex-direction: column;
        width: 50%;
      }
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
