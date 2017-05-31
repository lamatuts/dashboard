<template>
  <div id="rightdrawer">
    <v-navigation-drawer
      temporary

    >
      <v-list>
        <v-list-item>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon light>compare_arrows</v-icon>
            </v-list-tile-action>

          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "rightdrawer",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
</style>
