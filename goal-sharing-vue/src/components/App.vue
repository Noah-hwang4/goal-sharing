<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title v-on:click="move('goal')">목표 공유</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title v-on:click="move('blackAndWhite')">흑과 백</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>목표 공유</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn small color="error" v-on:click="move('new')">새 목표</v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <span>goal sharing</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    drawer: null
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    ...mapActions('router', {
      setRouterPath: 'setRouterPath'
    }),
    move: function (name) {
      let path = '/'

      if (name === 'blackAndWhite') {
        path = '/game/blackAndWhite'
      } else if (name === 'new') {
        path = '/goal/new'
      }

      this.setRouterPath({ path: path })
    }
  }
}
</script>
