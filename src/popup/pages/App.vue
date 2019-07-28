<template>
  <div class="popup-style">
    <el-button @click="defClick">Default</el-button>
    <el-tabs class="el_tabs" v-model="activeTabs" :tab-position="tabPosition" @tab-click="handleClick">
      <el-tab-pane label="我的自选" name="iChoice">
        <virtual-list
          :size="itemSize"
          :remain="remain"
          :bench="20"
          :start="start"
          :item="item"
          :itemcount="itemCount"
          :itemprops="getItemProps"
        />
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import stock_item from '../component/item'
import virtualList from 'vue-virtual-scroll-list' 
import { countStorage, getRandomUser } from '../component/util'

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
				let stockObj = getStockDetail({res, code, cost, count})
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
      chrome.storage.sync.set(
        {
          yourBody: 'myBody',
        },
        function() {
          console.log('insertStorage callback')
        }
      )
    },
    getItemProps(itemIndex) {
      return {
        key: itemIndex,
        props: {
          height: this.itemSize,
          index: this.itemIndex,
          info: this.userInfoList[itemIndex] || {},
        },
      }
    },
  },
  components: {
    stock_item,
    'virtual-list': virtualList,
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
<style scoped>
</style>
