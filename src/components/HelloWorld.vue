<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <!-- <p :class="`num ${activeClass ? 'active' : ''}`">{{ count }}</p> -->
      <p :class="['num', {active:activeClass}]">{{ count }}</p>
      <button v-on:click="minus">- 감소</button>
      <button @click="plus(2)">증가 +</button>
      <button @click="toggle">toggle</button>

      <!-- v-on: === @ -->
      <!-- v-bind: === : -->
      <!-- 인자값 보낼 때 v-on:click="(2)=>{plus()}" 이렇게 안써도 됨. -->

    </div>
  </div>
</template>

<script>
export default {
  //변수만드는거
  data(){
    return { count:0, activeClass: false }
  },
  //함수만드는거
  methods:{
    plus(n){
      this.count += n;
    },
    minus(){
      this.count--;
    },
    toggle(){
      this.activeClass = !this.activeClass;
    },
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .num {
    font-size: 5rem;
    color: greenyellow;
  }
  .active {
    color: green
  }
</style>
