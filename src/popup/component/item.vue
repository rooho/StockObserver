<template>
  <div class="item" :style="itemStyle">
    <div class="index">
      #{{ index }}
    </div>
    <div class="card">
      <div v-if="variable" class="card-height">
        {{ height }}px
      </div>
    </div>
  </div>
</template>

<script>
  import {getQuery} from './util'

  export default {
    name: 'Item',
    props: {
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
        default: () => ({
          name: '',
          time: '',
          avatar: '',
          color: ''
        })
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
    methods: {
      getAbbrName(name) {
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
    height: 100px;
    .card {
      height: 50px;
    }
  }
</style>
