<template>
    <div>
      <span>我是父组件</span>-------{{fromSonMsg}} <br>
      我是父组件中拿到的全局状态： {{getCount}}
      <button @click="padd">父组件--改变状态按钮</button>
      <button @click="paddaction">父组件--改变状态按钮(actioon)</button>
      <hr>
      <son :msg="toSonMsg" @handle="getMsgFromSOn"></son>
    </div>
</template>


<script>
  import son from './son'
    export default {
        name: "parent",
      data:function(){
        return {
          toSonMsg:'我是你的父亲',
          fromSonMsg:''
        }
      },
      components:{
        son
      },
      methods:{
        getMsgFromSOn:function (value) {
            this.fromSonMsg = value;
        },
        padd(){
          this.$store.commit('increase');
        },
        paddaction(){
          this.$store.dispatch('decreaseAction')
        }
      },
      computed:{
        getCount:function () {
          // return this.$store.state.num;
          return this.$store.getters.getNum;
        }
      }
    }
</script>

<style scoped>

</style>
