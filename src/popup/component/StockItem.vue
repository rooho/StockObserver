<template>
  <div class="item">
    <div class="top"></div>
    <div class="stockInfo">
      <span class="name">{{stockName}}</span>
      <span class="code">({{stockCode}})</span>
    </div>
    <div class="stockPrice">
      <span class="price">{{currentPrice}}</span>
    </div>
  </div>
</template>

<script>
  import {
    getQuery
  } from './util'

  export default {
    name: 'Item',
    props: {
      stockName: {
        type: String,
        default: ""
      },
      stockCode: {
        type: Number,
        default: 0
      },
      currentPrice: {
        type: Number,
        default: 0
      },
      index: {
        type: Number,
        default: 0
      },
      variable: Boolean,
      info: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        avatar: getQuery('avatar') !== null
      }
    },
    methods: {
      getAbbrName(name) {
        if (!name) {
          return ''
        }

        const arr = name.split(' ')
        if (arr.length > 1) {
          return arr[0][0] + arr[1][0]
        } else {
          return name.substr(0, 2)
        }
      }
    }
  }

</script>

<style lang="less">
  .item {
    box-sizing: border-box;
    display: flex;
    height: 34px;
    border-bottom: 1px solid #A9A9A9;
    font-family: "微软雅黑"
  }

  .top {
    width: 30px;
  }

  .stockInfo {
    height: 30px;
    width: 55px;
    flex-wrap: wrap;
    margin: 2px;
    text-align: center;
    // background-color:#F0E68C;
    font-family: Monospace;

    .name {
      font-size: 12px;
      color: #36c;
    }

    .code {
      color: gray;
    }
  }

  .stockPrice {
    // margin: 3px;
    font-size: 14px;
    width: 70px;
    text-align: center;
    font-weight: bold;

    .price {
      color: #FF0000;
      margin-top: 10px;
    }
  }

</style>
