<script>
export default {};
</script>
<template>
  <div class="add_block">
    <div class="add_window">
      <div class="add_tit">新增人事資料</div>
      <div class="add_con">
        <div class="add_input">
          新增帳號: <input type="text" placeholder="輸入使用者帳號" />
        </div>
        <div class="add_input">
          新增密碼: <input type="text" placeholder="輸入使用者密碼" />
        </div>
        <div class="add_input">
          新增姓名: <input type="text" placeholder="輸入姓名" />
        </div>
        <div class="add_input">
          新增職位: <input type="text" placeholder="輸入職位" />
        </div>
      </div>
      <div class="add_btns"></div>
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
    width: 300px;
    height: 300px;
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
