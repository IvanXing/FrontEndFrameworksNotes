<template>
  <div class="hello">
    <h3>我是axiosAPP,用来发送请求，拦截响应</h3>
    <button @click="getData">GET方式发送请求</button>
    <button @click="postData">POST方式发送请求</button>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  Vue.prototype.$http = axios;
  import axios from 'axios'
  import Vue from 'vue'
  import qs from 'qs'

export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[]
    }
  },
  methods:{
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=15')
        .then(res=>{
          this.items = res.data.data;
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    postData(){
      this.$http.post(url,qs.stringify({
        psge:1,
        limit:20
      })).then(res=>{
          this.items = res.data.data;
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
