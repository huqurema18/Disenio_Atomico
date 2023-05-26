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
        <td>{{ row.name }}</td>
        <td>{{ row.surname }}</td>
        <td>{{ row.age }}</td>
        <td>{{ row.id }}</td>
        <td>
          <button @click="removeRow(rowIndex)">Eliminar</button>
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
    removeRow(index) {
      this.$emit('remove', index);
    }
  }
}
</script>
