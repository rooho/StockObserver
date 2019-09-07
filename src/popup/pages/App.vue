<template>
  <div class="popup_style">
    <el-tabs class="el_tabs" v-model="activeTabs" :tab-position="tabPosition" @tab-click="handleClick">
      <pan-my-choose />
      <el-tab-pane label="四姨太" name="second">四姨太</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import pane_my_choose from '../component/pane_my_choose'
  // import stock_item from '../component/StockItem'

  import {
    countStorage,
    getRandomUser
  } from '../component/util'

  import {
    getStockByCode,
    getStockBySuggest,
    getStockTrade,
    getAnnouncement
  } from '../../api/sina';

  import {
    checkAllow,
    getRightShock,
    getColWidth,
    getFixedNum,
    MIN_STOCKWIDTH_WITH_SET
  } from '../../api/base';

  import {
    getSuggestList,
    getStockDetail,
    getStockTradeDetail,
    getAnnouncementDetail
  } from '../../api/former';
  // const itemCount = countStorage.get()

  export default {
    data() {
      return {
        activeTabs: "iChoice",
        tabPosition: "top",
      }
    },
    methods: {
      handleClick() {
        console.log("handleClick-tabs")
      },
    },
    components: {
      'pan-my-choose':pane_my_choose,
    },
    mounted() {
      this.loadInitData()
    },
  }

</script>

<style>
  .el-tabs__header {
    margin: 0 0 2px;
  }

  .el-tabs__item {
    padding: 0px 5px;
  }

</style>

<style lang="less">
  .stock_list {
    height: 300px;
  }

</style>
