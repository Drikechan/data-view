<template>
  <div id="app">
    <Screen></Screen>
  </div>
</template>
<script>
import Screen from './views/Screen/index.vue';
export default {
  name: 'app',
  components: {
    Screen
  }
}
</script>
<style scoped lang="scss">
//.container {
//  position: fixed;
//  top: 0;
//  left: 0;
//  overflow: hidden;
//  transform-origin: left top;
//  z-index: 999;
//}
</style>
<style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}


#app {
  width: 100%;
  height: 100%;
  font-family: "Microsoft Yahei", Arial, sans-serif;
  overflow: hidden;
}
</style>