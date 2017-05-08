<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div>{{$route.params}}</div>
    <router-link :to="{path:'apple'}">to apple</router-link>
    <router-link :to="{path:'banana'}">to banana</router-link>
    <router-link :to="{path:'readapple'}">to redapple</router-link>
    <br/>
    <button @click="getParams">get param</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    getParams(){
        console.log(this.$route.params)
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
