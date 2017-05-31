<template>
  <div id="footerdashboard">
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "footerdashboard",
  data: function data() {
    return {
      fixed:true
    }
  }
}
</script>
<style lang="scss">
</style>
