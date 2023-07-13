<script setup>
import { ref } from 'vue'

import { useFetch } from '../composables/fetch.js'


const period = ref('month');  // day | week | month

const { data } = await useFetch(period);

</script>


<template>
  

  <!-- <pre>
    {{ data }}
  </pre> -->

  <table>
    <thead>
      <tr>
        <th rowspan="2">
          <div>Период</div>
          <select v-model="period">
            <option value="day">День</option>
            <option value="week">Неделя</option>
            <option value="month">Месяц</option>
          </select>
        </th>

        <th colspan="2">Температура</th>
      </tr>

      <tr>
        <th>средняя</th>
        <th>скользящая средняя</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="{ period, average, sliding } in data"
      >
        <td>{{ period }}</td>
        <td>{{ average }}</td>
        <td>{{ sliding }}</td>
      </tr>
    </tbody>
  </table>
  
</template>

<style scoped>

</style>