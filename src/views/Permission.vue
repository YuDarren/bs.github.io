<script>
export default {};
</script>
<template>
  <div class="main">
    <nav class="per_haeder">
      <div class="per_bnts">
        <div class="btn">
          <router-link to="/permission/supervisor">supervisor</router-link>
        </div>
        <div class="btn">
          <router-link to="/permission/employee">employee</router-link>
        </div>
      </div>
      <div class="addinfo_bnt"></div>
    </nav>

    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.per_main {
  padding-top: 40px;
  margin: 0 auto;
  width: calc(100% - 260px);
  max-width: 1920px;
}
</style>
