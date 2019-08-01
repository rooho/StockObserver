<template>
  <div class="popup_style">
    <el-tabs class="el_tabs" v-model="activeTabs" :tab-position="tabPosition" @tab-click="handleClick">
      <el-tab-pane label="我的自选" name="iChoice">
        <draggable class="stock_list" v-model="myArray" @start="drag=true" @end="drag=false">
          <div v-for="element in myArray" :key="element.id">
            <stock_item stockName="青岛海尔" stockCode="600690" currentPrice="20.91"/>
          </div>
        </draggable>
      </el-tab-pane>
      <el-tab-pane label="四姨太" name="second">四姨太</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  // import stock_item from '../component/item'
  import stock_item from '../component/StockItem'
  import draggable from 'vuedraggable'

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
        start: 1,
        remain: 10,
        itemCount: 100,
        itemSize: 30,
        height: 300,
        item: stock_item,
        userInfoList: [],
        activeTabs: "iChoice",
        tabPosition: "top",
        myArray: [{},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
      }
    },
    methods: {
      handleClick() {
        console.log("handleClick-tabs")
      },
      defClick() {
        console.log("defClick!!!!!@!@!@@")
        var code = 'sh000001'
        var cost = 50
        var count = 50
        getStockByCode(code).then(res => {
          let stockObj = getStockDetail({
            res,
            code,
            cost,
            count
          })
          console.log("stockObj:" + JSON.stringify(stockObj))
        })
      },
      loadInitData() {
        this.insertStorage()
        for (let i = 0; i < this.itemCount; i += 1) {
          this.userInfoList.push(getRandomUser())
        }
      },
      insertStorage() {
        chrome.storage.sync.set({
            yourBody: 'myBody',
          },
          function () {
            console.log('insertStorage callback')
          }
        )
      },
    },
    components: {
      draggable,
      stock_item,
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
