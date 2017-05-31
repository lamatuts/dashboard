<template>
  <div id="initarea">
      <dashboard></dashboard>
  </div>
</template>
<script>
import dashboard from './components/dashboard/Dashboard.vue';
export default {
  name: "initarea",
  components: {
    dashboard
  }
}
</script>
<style lang="stylus">
  @import './stylus/main'
</style>
