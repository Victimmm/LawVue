<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <BasicInfo></BasicInfo>
  <PlaintiffImf></PlaintiffImf>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BasicInfo from './components/BasicInfo.vue'
import BasicInfo from './components/BasicInfo.vue'
import PlaintiffImf from './components/PlaintiffImf.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    BasicInfo,
    PlaintiffImf
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
