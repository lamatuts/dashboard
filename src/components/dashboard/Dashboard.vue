<template>
    <v-app>
        <left-drawer></left-drawer>
        <toolbar></toolbar> <!-- Dashboard Toolbar-->
        <main>
          <v-container fluid>
            <v-slide-y-transition mode="out-in">
              <v-layout column align-center>
                <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
                <blockquote>
                  &#8220;First, solve the problem. Then, write the code.&#8221;
                  <footer>
                    <small>
                      <em>&mdash;John Johnson</em>
                    </small>
                  </footer>
                </blockquote>
              </v-layout>
            </v-slide-y-transition>
          </v-container>
        </main>
      <right-drawer></right-drawer>
      <footer-area></footer-area>
    </v-app>
</template>

<script>
import Toolbar from './Toolbar.vue';
import RightDrawer from './drawers/RightDrawer.vue';
import LeftDrawer from './drawers/LeftDrawer.vue';
  export default {
    components: {
      Toolbar, RightDrawer,LeftDrawer,FooterArea
    }
  }
</script>
