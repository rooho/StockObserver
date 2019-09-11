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
        type: String,
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
  .stockInfo {
    text-align: center;
    font-family: "微软雅黑";
    font-weight: bold;

    .name {
      font-size: 15px;
      color: #5155cc;
    }

    .code {
      font-size: 12px;
      color: gray;
    }
  }
</style>
