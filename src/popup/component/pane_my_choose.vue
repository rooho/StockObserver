<template>
  <draggable class="stock_list" v-model="myArray" @start="drag=true" @end="drag=false">
    <div v-for="element in myArray" :key="element.id">
      <stock_item
        :stockName="element.stockName"
        :stockCode="element.stockCode"
        :currentPrice="element.price"/>
    </div>
  </draggable>
</template>

<script>
  import stock_item from '../component/item'
  import draggable from 'vuedraggable'

  export default {
    name: 'Item',
    data() {
      return {
        start: 1,
        remain: 10,
        itemCount: 100,
        itemSize: 30,
        height: 300,
        userInfoList: [],
        myArray: [
          {
            stockName: "青岛海尔",
            stockCode: "600690",
            price: 20.91,
          },
          {
            stockName: "XD中国平安",
            stockCode: "601318",
            price: 91.91,
          },
          {
            stockName: "厦门港务",
            stockCode: "000905",
            price: 7.92,
          },
          {
            stockName: "青岛港",
            stockCode: "601298",
            price: 8.13,
          },
        ],
      }
    },
    methods: {
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
  }

</script>

<style lang="less">
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 32px;
  }

</style>
