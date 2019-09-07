<template>
  <el-row>
    <el-col :span="1">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="4">
      <div class="stockInfo">
        <div class="name">{{stockName}}</div>
        <div class="code">({{stockCode}})</div>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="2">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
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
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 32px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .stockInfo {
    text-align: center;
    font-family: "微软雅黑";

    .name {
      font-size: 15px;
      color: #36c;
    }

    .code {
      font-size: 12px;
      color: gray;
    }
  }
</style>
