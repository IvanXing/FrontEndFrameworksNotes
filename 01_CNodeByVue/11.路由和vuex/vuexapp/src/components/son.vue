<template>
    <div>
      <span>我是子组件</span>----{{msg}} <br>
      -----我是子组件中拿到的全局状态：{{getNum}}
      <button @click="senMsgToFa">向父组件传递数据</button>
      ---- <button @click="sadd">子组件--改变状态按钮</button>
      ---- <button @click="saddaction">子组件--改变状态按钮(action)</button>
    </div>
</template>

<script>
    export default {
        name: "parent",
        data:function(){
            return {
              toFatherMsg:'我是你的son'
            }
        },
        props:{
          msg:{
            type: String,
            default:''
          }
        },
      methods:{
        senMsgToFa:function () {
            this.$emit('handle',this.toFatherMsg)
        },
        sadd(){
          this.$store.commit('increase');
        },
        saddaction(){
          this.$store.dispatch('decreaseAction')
        }
      },
      computed:{
          getNum:function () {
              return this.$store.state.num;
          }
      }
    }
</script>

<style scoped>

</style>
