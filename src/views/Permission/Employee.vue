<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { Type } from "../../constants";
import EditPersonInfo from "@/components/EditPersonInfo.vue";
export default {
  components: { EditPersonInfo },
  setup() {
    const typeConst = Type;
    const store = useStore();
    const isEdit = computed(() => {
      return store.getters.isEdit;
    });
    const handEditInfoAction = (item) => {
      console.log("item=>", item);
      const id = item.id;
      const account = item.account;
      const username = item.username;
      const type = item.type;
      store.commit("editPersonInfoID", id);
      store.commit("editPersonInfoAcc", account);
      store.commit("editPersonInfoUsername", username);
      store.commit("editPersonInfoType", type);
      store.dispatch("handEditInfoAction");
    };
    return {
      personnelList: computed(() => store.getters.personInfoTwo),
      typeConst,
      isEdit,
      handEditInfoAction,
    };
  },
};
</script>
<template>
  <div class="userinfo">
    <el-table
      class="table"
      :data="personnelList"
      height="800"
      style="width: 100%"
    >
      <el-table-column class="id" prop="id" label="員工編號" />
      <el-table-column class="username" prop="username" label="姓名" />
      <el-table-column class="account" prop="account" label="帳號" />
      <el-table-column class="type" prop="type" label="職位">
        <template v-slot="scope">
          <div>{{ typeConst[scope.row.type] }}</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right">
        <template v-slot="scope">
          <el-button
            color="#626aef"
            plain
            @click="handEditInfoAction(scope.row)"
            >編輯</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <EditPersonInfo v-if="isEdit" />
  </div>
</template>
<style lang="scss" scoped>
.userinfo {
  display: flex;
  width: 100% auto;
  align-items: center;
  justify-content: space-around;
  .table {
    font-size: 18px;
    .id {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 25%;
    }
    .username {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 25%;
    }
    .type {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 25%;
    }
    .account {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 25%;
    }
  }
}
</style>
