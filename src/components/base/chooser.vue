<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
        v-for="(item,index) in selections"
        @click="chosenSelection(index)"
        :title="item.label"
        :class="{active:index===nowIndex}">{{item.label}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data(){
      return {
        nowIndex: 0
      }
    },
    methods: {
      chosenSelection(index){
        this.nowIndex = index
        this.$emit('on-change', this.selections[index])
      }
    }
  }
</script>
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }

  .chooser-list li {
    margin-right: 5px;
    display: inline-block;
    border: 1px solid #e3e3e3;
    padding:5px;
  }

  .active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
