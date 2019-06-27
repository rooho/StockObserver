<template>
  <div>
    <h1>{{ msg }}</h1>
    <span> page list </span>
    <virtual-list class="list"
                  :size="itemSize"
                  :remain="remain"
                  :bench="30"
                  :start="start"
                  :variable="getVariableHeight"
                  :item="item"
                  :itemcount="itemCount"
                  :itemprops="getItemProps"
    />
  </div>
</template>

<script>
  import stock_item from '../component/item'
  import virtualList from 'vue-virtual-scroll-list'

  export default {
    data() {
      return {
        msg: 'Welcome baby now!',
        start: 1,
        remain: 1,
        itemSize: 80,
        itemCount: 200,
        item: stock_item,
      }
    },
    methods: {
      loadInitData() {
        console.log("loadInitData!")
        this.insertStorage()
      },
      insertStorage() {
        chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
          console.log("insertStorage callback")
        });
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
