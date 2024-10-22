<!-- vueInit -->
<template lang="">
  <div>
    <h1>This is test page</h1>
    <ul>
      <li v-for="(item, key) in data" :key="key">{{item.name}}</li>
    </ul>
    <button @click="pageRouter">홈으로 돌아가기</button>
    <router-link to="/about">about</router-link>
  </div>
</template>
<script>
export default {
  name: "TestView",
  //변수 담는곳
  data(){
    return {
      data: [{id:0,name:'홍'},{id:1,name:'길'},{id:2,name:'동'}]
    }
  },
  //함수 담는곳
  methods: {
    pageRouter(){
      // $ <<붙은건 뷰 자체에 내장되어있는 것임. 
      // this.$router.push('home')
      // this.$router.push('/')
      this.$router.push({name:'home', query:{num:1000}})
      console.log(this.$router);
    },
  },
}
</script>
<style lang="">
  
</style>