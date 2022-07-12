<script>
export default {};
</script>
<template>
  <div class="add_window">
    <div class="add_tit">新增人事資料</div>
    <div class="add_con">
      <div class="add_name">
        姓名: <input type="text" placeholder="輸入姓名" />
      </div>
      <div class="add_jobtit">
        職位: <input type="text" placeholder="輸入職位" />
      </div>
      <div class="add_phone">
        手機號碼: <input type="text" placeholder="輸入手機號碼" />
      </div>
      <div class="add_email">
        電子聯絡信箱: <input type="text" placeholder="輸入e-mail" />
      </div>
    </div>
    <div class="add_btns"></div>
  </div>
</template>
<style lang="scss" scoped>
.add_window {
  width: 500px;
  height: 500px;
  background: #d0d0d0;
  .add_tit {
    color: #000000;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #000000;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .add_con {
  }
  .add_btns {
  }
}
</style>
