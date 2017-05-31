<template>
  <div id="toolbar">
    <v-toolbar>
      <v-toolbar-side-icon
       ></v-toolbar-side-icon>
      <v-btn
        icon

      >

      </v-btn>
      <v-btn
        icon

      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon

      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon

      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "toolbar",
  data: function(){
    return {
      title: "Dashboard"
    }
  }

}
</script>
<style lang="scss">
</style>
