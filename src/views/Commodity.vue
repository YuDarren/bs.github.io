<script>
import { apiGetTaiwanArea } from "../api/apiTaiewan.js";
import { onMounted, reactive, watch } from "@vue/runtime-core";

export default {
  setup() {
    const twzip = reactive({ city: [], area: [] });
    const ruleForm = reactive({
      city: "",
      area: "",
      house: "",
      require: "",
    });
    const house = reactive([
      {
        value: 1,
        label: "整層住家",
      },
      {
        value: 2,
        label: "獨立套房",
      },
      {
        value: 3,
        label: "分租套房",
      },
      {
        value: 4,
        label: "雅房",
      },
      {
        value: 5,
        label: "車位",
      },
      {
        value: 6,
        label: "其他",
      },
    ]);
    const require = reactive([
      {
        value: 1,
        label: "新上架",
      },
      {
        value: 2,
        label: "近捷運",
      },
      {
        value: 3,
        label: "可養寵物",
      },
      {
        value: 4,
        label: "可開伙",
      },
      {
        value: 5,
        label: "有車位",
      },
      {
        value: 6,
        label: "有電梯",
      },
      {
        value: 7,
        label: "有陽台",
      },
      {
        value: 8,
        label: "可短期租賃",
      },
    ]);
    const tableData = reactive([
      {
        date: "2022-09-03",
        name: "西區",
        state: "分租套房",
        city: "台中市",
        address: "新上架,可養寵物",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        date: "2022-08-30",
        name: "中山區",
        state: "獨立套房",
        city: "台北市",
        address: "有陽台,可短期租賃",
        zip: "CA 90036",
        tag: "Office",
      },
      {
        date: "2022-09-10",
        name: "秀水鄉",
        state: "整層住家",
        city: "彰化縣",
        address: "有電梯,可養寵物,可開伙",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        date: "2022-08-01",
        name: "板橋區",
        state: "雅房",
        city: "新北市",
        address: "近捷運,有電梯,有陽台",
        zip: "CA 90036",
        tag: "Office",
      },
    ]);
    watch(
      () => ruleForm.city,
      (newCity) => {
        const newArr = twzip.city.filter((city) => city.name === newCity);
        ruleForm.area = "";
        twzip.area = newArr[0].area;
      }
    );

    onMounted(() => {
      apiGetTaiwanArea().then((res) => {
        twzip.city = res.data.twzip.city;
      });
    });

    return {
      twzip,
      ruleForm,
      house,
      require,
      tableData,
    };
  },
};
</script>
<template>
  <div class="com">
    <div class="com_head">
      <div class="com_head_selectes">
        <div class="chs">
          <p>縣市</p>
          <el-select
            v-model="ruleForm.city"
            class="m-2"
            placeholder="請選擇縣市"
            style="width: 200px"
          >
            <el-option
              v-for="item in twzip.city"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </div>
        <div class="chs">
          <p>鄉鎮區</p>
          <el-select
            v-model="ruleForm.area"
            class="m-2"
            placeholder="請選擇鄉鎮區"
            style="width: 200px"
          >
            <el-option
              v-for="item in twzip.area"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </div>
        <div class="chs">
          <p>房型</p>
          <el-select
            v-model="ruleForm.house"
            class="m-2"
            placeholder="請選擇房型"
            style="width: 200px"
          >
            <el-option
              v-for="item in house"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="chs">
          <p>添加條件</p>
          <el-select
            class="m-2"
            v-model="ruleForm.require"
            multiple
            placeholder="請選擇添加條件"
            style="width: 200px"
          >
            <el-option
              v-for="item in require"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="com_head_btns">
        <el-button color="#0275b1">新增</el-button>
        <el-button color="#0275b1">匯入</el-button>
      </div>
    </div>
    <div class="com_main">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="200" />
        <el-table-column prop="city" label="城市" width="200" />
        <el-table-column prop="name" label="鄉鎮區" width="200" />
        <el-table-column prop="state" label="房型" width="200" />
        <el-table-column prop="address" label="需求" width="200" />
        <el-table-column fixed="right" width="120">
          <template #default>
            <el-button link type="primary" size="small">詳情</el-button>
            <el-button link type="primary" size="small">編輯</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.com {
  padding: 40px 0px;
  margin: 0 auto;
  width: calc(100% - 300px);
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  .com_head {
    display: inline-flex;
    align-items: flex-end;
    justify-content: space-between;
    .com_head_selectes {
      display: flex;
      .chs {
      }
      .chs + .chs {
        margin-left: 20px;
      }
    }
    .com_head_btns {
      .el-button + .el-button {
        margin-left: 30px;
      }
    }
  }
  .com_main {
    margin-top: 50px;
  }
}
</style>
