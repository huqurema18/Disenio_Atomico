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
          <td>{{ row.nombre }}</td>
          <td>{{ row.apellido }}</td>
          <td>{{ row.edad }}</td>
          <td>{{ row.cedula }}</td>
          <td>
            {{ calculateAge(row.edad) }}
          </td>
          <td>
            <button-atom @click="removeRow(rowIndex)">Eliminar</button-atom>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>

  import ButtonAtom from '../Atomos/ButtonAtom.vue';
  
  export default {
    components: {
      ButtonAtom
    },
    props: {
      headers: Array,
      rows: Array
    },
    methods: {
      calculateAge(age) {
        return age >= 18 ? 'Mayor de edad' : 'Menor de edad';
      },
      removeRow(index) {
        this.$emit('remove', index);
      }
    }
  }
  </script>
  