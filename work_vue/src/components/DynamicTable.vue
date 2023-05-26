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
        <td>{{ calculateAge(row.edad) }}</td>
        <td><button @click="remove(rowIndex)">Eliminar</button></td>
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
    calculateAge(edad) {
      return edad >= 18 ? 'Sí' : 'No';
    },
    remove(index) {
      this.$emit('remove', index);
    }
  }
}
</script>
