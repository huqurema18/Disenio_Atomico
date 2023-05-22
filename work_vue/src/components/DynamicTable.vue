<template>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(value, valueIndex) in row" :key="valueIndex">
            {{ value }}
          </td>
          <td>
            {{ calculateAge(row[2]) }}
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      headers: Array,
      rows: Array
    },
    methods: {
      calculateAge(age) {
        return age >= 18 ? 'Mayor de edad' : 'Menor de edad';
      }
    }
  }
  </script>
  