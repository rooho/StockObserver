<template>
  <div class="item">
    <div class="top"></div>
    <div class="stockInfo">
      <span class="name">{{stockName}}</span>
      <span class="code">({{stockCode}})</span>
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
      height: {
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
    computed: {
      itemStyle() {
        return {
          'height': `${this.height}px`,
          'line-height': `${this.height}px`
        }
      }
    },
    computed: {
      itemStyle() {
        return {
          'height': `${this.height}px`,
          'line-height': `${this.height}px`
        }
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
  }

  .top {
    width: 30px;
  }

  .stockInfo {
    height: 30px;
    width: 60px;
    flex-wrap: wrap;

    .name {
      font-size: 12px;
      color: #36c;
      margin: 0 auto;
    }

    .code {
      font-size: 6px;
      color: gray;
      margin: 0 auto;
    }
  }

</style>
