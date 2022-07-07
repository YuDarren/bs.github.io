<script>
import { User, Right } from "@element-plus/icons-vue";
export default {
  components: { User, Right },
};
</script>
<template>
  <header>
    <div class="head">
      <div class="head_left">
        <div class="head_tit">Backend System</div>
        <div class="head_btns">
          <div class="btn">
            <router-link to="/">Permission</router-link>
          </div>
          <div class="btn">
            <router-link to="/commodity">Commodity</router-link>
          </div>
        </div>
      </div>
      <div class="head_right">
        <div class="head_user">
          <div class="user_photo">
            <el-icon><User /></el-icon>
          </div>
          <div class="user_info">
            <div class="user_name">Darren Yu</div>
            <div class="user_jobtit">Staff</div>
          </div>
        </div>
        <div class="head_signout">
          <div class="signout_btn">
            <div class="so_photo">
              <el-icon><Right /></el-icon>
            </div>
            <div class="so_name">sign out</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.head {
  background: #0275b1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  .head_left {
    display: flex;
    .head_tit {
      font-size: 36px;
      color: #fff;
      padding: 20px;
      border-right: 1px solid #fff;
    }
    .head_btns {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .btn {
        text-transform: uppercase;
        font-size: 20px;

        a {
          padding: 30px;
          color: #fff;
          &.router-link-exact-active {
            padding: 30px;
            background: #46a3ff;
          }
        }
      }
      .btn + .btn {
        margin-left: 20px;
      }
    }
  }
  .head_right {
    .head_user {
      .user_photo {
      }
      .user_info {
        .user_name {
        }
        .user_jobtit {
        }
      }
    }
    .head_signout {
      .signout_btn {
        .so_photo {
        }
        .so_name {
        }
      }
    }
  }
}
</style>
