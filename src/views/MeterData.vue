<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.mid }}</td>
        <td class="text-xs-right">{{ props.item.exid }}</td>
        <td class="text-xs-right">{{ props.item.w }}</td>
        <td class="text-xs-right">{{ props.item.wh }}</td>
        <td class="text-xs-right">{{ props.item.pf }}</td>
        <td class="text-xs-right">{{ props.item.varh }}</td>
        <td class="text-xs-right">{{ props.item.i0 }}</td>
        <td class="text-xs-right">{{ props.item.i1 }}</td>
        <td class="text-xs-right">{{ props.item.i2 }}</td>
        <td class="text-xs-right">{{ props.item.v0 }}</td>
        <td class="text-xs-right">{{ props.item.v1 }}</td>
        <td class="text-xs-right">{{ props.item.v2 }}</td>
        <td class="text-xs-right">{{ props.item.dt }}</td>
      </template>
      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning"
          >Sorry, nothing data to display :(</v-alert
        >
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Record ID",
          align: "right",
          sortable: false
        },
        { text: "Meter ID", align: "right", sortable: false },
        { text: "EXID", align: "right", sortable: false },
        { text: "W", align: "right", sortable: false },
        { text: "Wh", align: "right", sortable: false },
        { text: "PF", align: "right", sortable: false },
        { text: "Varh", align: "right", sortable: false },
        { text: "I0", align: "right", sortable: false },
        { text: "I1", align: "right", sortable: false },
        { text: "I2", align: "right", sortable: false },
        { text: "V0", align: "right", sortable: false },
        { text: "V1", align: "right", sortable: false },
        { text: "V2", align: "right", sortable: false },
        { text: "Date/Time", align: "right", sortable: false }
      ],
      desserts: [
        {
          id: 100,
          mid: 1,
          exid: 1021,
          w: 24,
          wh: 187490,
          pf: 0.97,
          varh: 39028,
          i0: 12,
          i1: 10.99,
          i2: 5.89,
          v0: 223.45,
          v1: 222.89,
          v2: 223.56,
          dt: "2019-04-03 11:43:30"
        },
        {
          id: 101,
          mid: 1,
          exid: 1021,
          w: 24,
          wh: 187490,
          pf: 0.97,
          varh: 39028,
          i0: 12,
          i1: 10.99,
          i2: 5.89,
          v0: 223.45,
          v1: 222.89,
          v2: 223.56,
          dt: "2019-04-03 11:43:30"
        }
      ]
    };
  }
};
</script>
