<script>
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
<template>
  <div class="add_block">
    <div class="add_window">
      <div class="add_tit">新增人事資料</div>
      <div class="add_con">
        <div class="add_input">
          新增帳號:<el-input
            v-model="input"
            type="text"
            placeholder="輸入使用者帳號"
            clearable
          />
        </div>
        <div class="add_input">
          新增密碼:
          <el-input
            v-model="input"
            type="text"
            placeholder="輸入使用者密碼"
            clearable
          />
        </div>
        <div class="add_input">
          新增姓名:
          <el-input
            v-model="input"
            type="text"
            placeholder="輸入姓名"
            clearable
          />
        </div>
        <div class="add_input">
          新增職位:
          <el-input
            v-model="input"
            type="text"
            placeholder="輸入職位"
            clearable
          />
        </div>
      </div>
      <div class="add_btns">
        <el-button type="info" plain>確定</el-button>
        <el-button type="info" plain>取消</el-button>
      </div>
    </div>
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
    height: 500px;
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
    }
  }
}
</style>
