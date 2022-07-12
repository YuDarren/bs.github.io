<script>
export default {};
</script>
<template>
  <div class="userinfo">
    <div class="name">姓名:王大明</div>
    <div class="jobtit">職位:業務主管</div>
    <div class="phone">手機號碼:0900-111-222</div>
    <div class="email">電子郵件:testnumber1@gmail.com</div>
  </div>
</template>
<style lang="scss" scoped>
.userinfo {
  border: 1px solid #000000;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  .name {
    flex: 1;
  }
  .jobtit {
    flex: 1;
  }
  .phone {
    flex: 1;
  }
  .email {
    flex: 1;
  }
}
.userinfo + .userinfo {
  margin-top: 20px;
}
</style>
