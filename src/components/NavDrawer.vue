/* eslint-disable vue/valid-v-on */
<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="mini"
    absolute
    light
    temporary
  >
    <v-list>
      <router-link to="/">
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
      </router-link>

      <v-list-group no-action prepend-icon="present_to_all">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Data logging</v-list-tile-title>
          </v-list-tile>
        </template>

        <router-link to="/meterdata">
          <v-list-tile @click>
            <v-list-tile-title>Meter</v-list-tile-title>
          </v-list-tile>
        </router-link>
        <v-list-tile @click>
          <v-list-tile-title>Power Quality Meter</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-title>Sensor</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-group no-action prepend-icon="build">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Configuration</v-list-tile-title>
          </v-list-tile>
        </template>

        <router-link to="/loggerconfig">
          <v-list-tile @click>
            <v-list-tile-title>Datalogger</v-list-tile-title>
          </v-list-tile>
        </router-link>
        <router-link to="/allmeter">
          <v-list-tile @click>
            <v-list-tile-title>All Meter</v-list-tile-title>
          </v-list-tile>
        </router-link>
        <router-link to="/allsensor">
          <v-list-tile @click>
            <v-list-tile-title>All Sensor</v-list-tile-title>
          </v-list-tile>
        </router-link>
      </v-list-group>

      <router-link to="/about">
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>business</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      mini: false,
      right: null
    };
  },
  props: {
    drawer: null
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
