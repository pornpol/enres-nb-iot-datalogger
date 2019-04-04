<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2>
        <h1 class="pb-4">Datalogger Configuration</h1>
        <v-form>
          <v-text-field label="AP Name" suffix="- 30AEA4C37100"></v-text-field>
          <v-text-field label="AP Password"></v-text-field>
          <v-text-field label="STA Name"></v-text-field>
          <v-text-field label="STA Password"></v-text-field>
          <v-text-field label="Meter Endpoint (Single)"></v-text-field>
          <v-text-field label="Meter Endpoint (Batch)"></v-text-field>
          <v-text-field label="Sensor Endpoint (Single)"></v-text-field>
          <v-text-field label="Sensor Endpoint (Batch)"></v-text-field>
          <v-text-field label="Access Token"></v-text-field>
          <v-select
            label="Upload"
            :items="[
              { value: 0, text: 'None' },
              { value: 1, text: 'NB-Iot' },
              { value: 2, text: 'Wi-Fi' }
            ]"
          ></v-select>
          <v-text-field
            type="number"
            label="Data Interval (Seconds)"
          ></v-text-field>
          <v-select
            label="Datalogger Type"
            :items="[
              { value: 0, text: 'None' },
              { value: 1, text: 'Meter' },
              { value: 2, text: 'PQ Meter' },
              { value: 3, text: 'Sensor' }
            ]"
          ></v-select>
          <v-btn @click="back">back</v-btn>
          <v-btn @click="update">update</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script></script>

<style></style>
