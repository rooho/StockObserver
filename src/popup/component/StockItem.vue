<template>
  <div class="item" :style="itemStyle">
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
    @media (max-width: 640px) {
      -webkit-user-select: none;
      user-select: none;
    }
    // &:hover {
    //     background-color: #f0f8ff;
    // }
    .index {
      flex: 1;
      text-align: center;
    }
</style>
