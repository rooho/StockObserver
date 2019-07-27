<template>
  <div class="popup-style">
    <el-tabs v-model="activeTabs" type="card" @tab-click="handleClick">
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
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import stock_item from '../component/item'
import virtualList from 'vue-virtual-scroll-list'
import { countStorage, getRandomUser } from '../component/util'

// const itemCount = countStorage.get()

export default {
  data() {
    return {
      msg: 'Welcome baby now! yes',
      start: 1,
      remain: 10,
      itemCount: 100,
      itemSize: 30,
      height: 300,
      item: stock_item,
      userInfoList: [],
      activeTabs: "iChoice",
    }
  },
  methods: {
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
</style>
