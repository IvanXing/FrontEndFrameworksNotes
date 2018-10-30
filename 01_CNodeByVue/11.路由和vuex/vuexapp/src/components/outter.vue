<template>
  <div>
    我是outter组件拿到的全局状态：{{getOutterCount}} <br>
    <button @click="oadd">outter组件--改变状态按钮</button>
    <button @click="oaddaction">outter组件--改变状态按钮(action)</button>
  </div>
</template>
中
<script>
    export default {
        name: "outter",
        computed:{
          getOutterCount:function () {
            return this.$store.state.num;
          }
        },
      methods:{
        oadd(){
          this.$store.commit('increase');
        },
        oaddaction(){
          this.$store.dispatch('decreaseAction')
        }
      }
    }
</script>

<style scoped>

</style>
