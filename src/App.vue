<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="BasicInfo">
    <BasicInfo></BasicInfo>
  </div>
  
  <div id="whole_PlaintiffImf">
    <PlaintiffImf></PlaintiffImf>
    <PlaintiffImf v-for="(tag,index) in plaintiffImfTag.slice(1)" :key="index" @delete="onTagDelete"/>
  </div>
  
  <div id = "whole_DefendantImf">
    <DefendantImf></DefendantImf>
  </div>

  <div>
     <CourtInves></CourtInves>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BasicInfo from './components/BasicInfo.vue'
import BasicInfo from './components/BasicInfo.vue'
import PlaintiffImf from './components/PlaintiffImf.vue'
import DefendantImf from './components/DefendantImf.vue'
import CourtInves from './components/CourtInves.vue'
export default {
  name: 'App',
  data:function (){
    return {
      plaintiffImfTag:[]
    }
  },
  components: {
    // HelloWorld,
    BasicInfo,
    PlaintiffImf,
    DefendantImf,
    CourtInves
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.*{
  margin-top:20px;
}
</style>
