import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //被管理的状态state，类似于data
  state: {
      count:0
  },
  //mutations相当于methods,写方法对数据进行更改
  mutations: {
    add:(state,payload)=>{
      state.count += payload
    },
    sub:(state,payload)=>{
      state.count -= payload
    }
  },
  // actions类似与methods,写方法对数据进行更改(里面可以进行异步操作)
  actions: {
    add:(context,payload)=>{
      context.commit('add',payload)
    },
    sub:(context,payload)=>{
      context.commit('sub',payload)
    }
  },
  //getters类似于computed,在这里写方法
  getters:{
    getCount:state=>{
      var getCount = state.count;
      return getCount
    }
  }
})
