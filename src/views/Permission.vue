<script>
export default {};
</script>
<template>
  <div class="per">
    <nav class="per_haeder">
      <div class="per_btns">
        <div class="btn">
          <router-link to="/permission/supervisor">主管</router-link>
        </div>
        <div class="btn">
          <router-link to="/permission/employee">業務</router-link>
        </div>
      </div>
      <div class="addinfo_btn">
        <button><a href="#">新增</a></button>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.per {
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 360px);
  max-width: 1920px;
  display: flex;
  border: 1px solid black;
  .per_haeder {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 10px;

    .per_btns {
      display: flex;
      align-items: center;

      .btn {
        display: flex;
        align-items: center;

        font-weight: 600;
        a {
          border: 1px solid#f4f4f4;
          color: #0275b1;
          padding: 10px 30px;
          border-radius: 4px;
          &.router-link-exact-active {
            padding: 10px 30px;
            color: #fff;
            background: #e0e0e0;
            border-radius: 4px;
          }
        }
      }
      .btn + .btn {
        margin-left: 10px;
      }
    }
    .addinfo_btn {
      display: flex;
      align-items: center;

      button {
        cursor: pointer;
        padding: 10px 20px;
        background: #0275b1;
        border-radius: 4px;
        font-weight: 600;
        border: 1px solid #0275b1;
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
