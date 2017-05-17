<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
  <div class="order-list-choose">
    <div class="order-list-option">
      选择产品：
      <v-selection :selection="products" @on-change="productChange"></v-selection>
    </div>
    <div class="order-list-option">
      开始日期：
      <v-date-picker @on-change="getStartDate"></v-date-picker>
    </div>
    <div class="order-list-option">
      结束日期：
      <v-date-picker @on-change="getEndDate"></v-date-picker>
    </div>
    <div class="order-list-option">
      关键词：
      <input type="text" v-model.lazy="query" class="order-query">
    </div>
  </div>
  <div class="order-list-table">
    <table>
      <tr>
        <th v-for="head in tableHeads" @click="changeOrderType(head)" :class="{active:head.active}">
          {{head.label}}
        </th>
      </tr>
      <tr v-for="item in tableDate" :key="item.period">
        <td v-for="head in tableHeads">{{item[head.key]}}</td>
      </tr>
    </table>
  </div>
  </div>
</template>
<script>
  import VSelection from '../components/base/selection.vue'
  import VDatePicker from '../components/base/datepicker'
  import _ from 'lodash'
  export default{
    components: {
      VSelection,
      VDatePicker
    },
    data(){
      return {
        query: '',
        productId: 0,
        startDate: '',
        endDate: '',
        products: [
          {
            label: '数据统计',
            value: 0
          },
          {
            label: '数据预测',
            value: 1
          },
          {
            label: '流量分析',
            value: 2
          },
          {
            label: '广告发布',
            value: 3
          }
        ],
        tableHeaders: [
          {
            label: '订单号',
            key: 'orderId'
          },
          {
            label: '购买产品',
            key: 'product'
          },
          {
            label: '版本类型',
            key: 'version'
          },
          {
            label: '有效时间',
            key: 'period'
          },
          {
            label: '购买日期',
            key: 'data'
          },
          {
            label: '数量',
            key: 'buyNum'
          },
          {
            label: '总价',
            key: 'amount'
          }
        ],
        currentOrder: 'asc',
        tableData: []
      }
    },
    watch: {
      query(){
        this.getList
        ()
      }

    },
    methods: {
      productChange(obj){
        this.productId = obj.value
        this.getList()
      },
      getStartDate(date){
        this.startDate = date
        this.getList()
      },
      getEndDate(date){
        this.endDate = date
        this.getList()
      },
      getList(){
        let reqParams = {
          query: this.query,
          porductId: this.productId,
          startDate: this.startDate,
          endDate: this.endDate
        }
        this.$http.get(api.data.url).then((res) => {
          this.tabkeDate = res.data.list
        }, (error) => {

        })
      },
      changeOrderType(){
        this.tableHeaders.map((item) => {
          item.active = false
          return item
        })
        headItem.active = true
        if (this.currentOrder === 'asc') {
          this.currentOrder = 'desc'
        }
        else if (this.currentOrder === 'desc') {
          this.currentOrder = 'asc'
        }
        this.tableData = _.orderBy(this.table.tableData, headItem.key, this.currentOrder)
      }
    },
    mounted(){
      this.getList()
    }
  }
</script>
<style scoped>
  .order-wrap {
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
  }

  .order-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .order-query {
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    outline: none;
    text-indent: 10px;
  }
</style>
