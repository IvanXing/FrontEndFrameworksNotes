//创建状态仓库
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export  default new Vuex.Store({
  state:{
    num: 88
  },
  mutations:{
    //定义我们的状态改变函数
    increase:function (state) {
      state.num++;
    },
    decrease(state){
      state.num = state.num - 20;
    }
  },
  actions:{
    //context为上下文对象
    decreaseAction:function (context) {
      //actions中只能对mutation进行操作
      //     setTimeout(function () {
      context.commit('decrease');
      // },1000)
    }
  },
  getters:{
    getNum(state){
      return state.num >0 ? state.num :0;
    }
  }
})
