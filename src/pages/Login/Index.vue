<style lang="scss" scoped>

.container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(144,207,239);
}
</style>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
