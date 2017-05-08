<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
      name:'hello',
    data(){
          return{
              msg:'i am an apple'
          }
    }
  }
</script>
