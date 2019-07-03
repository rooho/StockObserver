<template>
  <div class="popup-style">
    <h1>{{ msg }}</h1>
    <span> page listA </span>
    <virtual-list class="list"
                  :size="itemSize"
                  :remain="remain"
                  :bench="20"
                  :start="start"

                  :item="item"
                  :itemcount="itemCount"
                  :itemprops="getItemProps" />
  </div>
</template>

<script>
  import stock_item from '../component/item'
  import virtualList from 'vue-virtual-scroll-list'
  import {countStorage, getRandomUser} from '../component/util'

  // const itemCount = countStorage.get()

  export default {
    data() {
      return {
        msg: 'Welcome baby now! yes',
        start: 1,
        remain: 1,
        itemCount: 100,
        itemSize: 30,
        item: stock_item,
        userInfoList: [],
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
        chrome.storage.sync.set({"yourBody": "myBody"}, function () {
          console.log("insertStorage callback")
        });
      },
      getItemProps(itemIndex) {
        return {
          key: itemIndex,
          props: {
            height: this.itemSize,
            index: this.itemIndex,
            info: this.userInfoList[itemIndex] || {}
          }
        }
      },
    },
    components: {stock_item, 'virtual-list': virtualList},
    mounted() {
      this.loadInitData()
    },
  }
</script>

<style lang="stylus">
</style>
