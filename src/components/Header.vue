<script>
import { User, Right } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { Type } from "../constants";
import { useRouter } from "vue-router";
export default {
  components: { User, Right },
  setup() {
    const store = useStore();
    const router = useRouter();
    const typeConst = Type;
    const userName = localStorage.username;
    const userType = localStorage.type;
    const handSignOutBtn = () => {
      store.dispatch("handSignOutSubmit");
      router.push("/");
    };
    return {
      handSignOutBtn,
      userName,
      userType,
      typeConst,
    };
  },
};
</script>
<template>
  <header>
    <div class="head">
      <div class="head_left">
        <div class="head_tit"><h2>房屋後臺系統</h2></div>
        <div class="head_btns">
          <div class="btn">
            <router-link to="/permission">人事管理</router-link>
          </div>
          <div class="btn">
            <router-link to="/commodity">物件管理</router-link>
          </div>
        </div>
      </div>
      <div class="head_right">
        <div class="head_user">
          <div class="user_photo">
            <el-icon><User /></el-icon>
          </div>
          <div class="user_info">
            <div class="user_name">{{ userName }}</div>
            <div class="user_jobtit">{{ typeConst[userType] }}</div>
          </div>
        </div>
        <div class="head_signout">
          <div class="signout_btn" @click="handSignOutBtn">
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
  .head_left {
    display: flex;
    .head_tit {
      h2 {
        font-size: 26px;
        color: #fff;
        border-right: 1px solid #fff;
        padding: 0px 20px;
      }
    }
    .head_btns {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .btn {
        text-transform: uppercase;
        font-size: 16px;
        padding: 0px 10px;

        a {
          padding: 20px;
          color: #fff;
          border-radius: 4px;
          &.router-link-active {
            padding: 20px;
            background: #46a3ff;
            border-radius: 4px;
          }
        }
      }
    }
  }
  .head_right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .head_user {
      display: flex;
      align-items: center;
      padding: 10px 20px;

      .user_photo {
        border-left: 1px solid #fff;
        display: flex;
        align-items: center;
        font-size: 48px;
        color: #fff;
        padding: 0px 10px 0px 20px;
      }
      .user_info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #fff;
        line-height: 1.5;
        .user_name {
          font-size: 20px;
        }
        .user_jobtit {
          font-size: 16px;
        }
      }
    }
    .head_signout {
      padding: 0px 20px 0px 30px;
      border-left: 1px solid #fff;
      .signout_btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .so_photo {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          border: 1px solid #fff;
          border-radius: 50%;
          font-size: 20px;
          font-weight: bolder;
        }
        .so_name {
          margin-top: 5px;
          font-size: 16px;
          color: #fff;
        }
      }
    }
    .head_user + .head_signout {
      margin-left: 20px;
    }
  }
}
</style>
