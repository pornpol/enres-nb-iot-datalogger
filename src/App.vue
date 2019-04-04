<template>
  <v-app id="app">
    <v-toolbar app color="blue darken-3" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-img :src="require('./assets/logo.png')" contain height="30"></v-img>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">&#160; NB-IOT DATALOGGER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span class="mr-2">Version 0.1</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <NavDrawer :drawer="drawer" />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from "./components/NavDrawer";
export default {
  name: "App",
  components: {
    NavDrawer
  },
  data() {
    return {
      drawer: null
    };
  }
};
</script>
