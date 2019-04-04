<template>
  <v-layout wrap text-xs-center>
    <v-flex xs8 offset-xs2>
      <v-layout row text-xs-center>
        <v-flex xs12>
          <h1 class="font-weight-bold py-4">System Information</h1>
        </v-flex>
      </v-layout>
      <v-layout row v-for="sysinfo in sysinfos" :key="sysinfo.topic">
        <v-flex xs6 text-xs-right>
          <v-card flat>
            <v-card-text>{{ sysinfo.topic }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6 text-xs-left>
          <v-card flat>
            <v-card-text left>{{ sysinfo.value }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      sysinfos: [
        {
          topic: "MAC Address :",
          value: "SDFGFDGJUH"
        },
        {
          topic: "IP Address :",
          value: "192.168.1.129"
        },
        {
          topic: "UP Time :",
          value: "0:0:30"
        },
        {
          topic: "Wi-Fi Status :",
          value: "Connected"
        },
        {
          topic: "NB-IoT Status :",
          value: "Connected"
        }
      ]
    };
  }
};
</script>

<style></style>
