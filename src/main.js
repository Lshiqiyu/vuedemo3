// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VRouter from 'vue-router'
import IndexPages from './pages/index'
import VueResource from 'vue-resource'
// import Apple from './components/apple'
// import Banana from './components/banana.vue'
// import Redapple from './components/redapple.vue'
// import Vuex from './vuex',


Vue.use(VRouter)
Vue.use(VueResource)
// Vue.use(Vuex)
//
// Vue.config.productionTip = false
//
// let store= new Vuex.Store({
//   state:{
//     totalPrice:0
//   },
//   mutations:{
//     increment(state,price){
//       state.totalPrice
//     }
//   }
//
//
// })

//
let router = new VRouter({
  mode:'history',
  routes: [
    {
      path:'/',
      component:IndexPages
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout}
})
