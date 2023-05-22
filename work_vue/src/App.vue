<template>
  <div>
    <dynamic-table :headers="headers" :rows="rows"></dynamic-table>
  </div>
</template>

<script>
import DynamicTable from './components/DynamicTable.vue';

export default {
  components: {
    DynamicTable
  },
  data() {
    return {
      headers: ['Nombre', 'Apellido', 'Edad', 'Cédula'],
      rows: [
        ['Juan', 'Pérez', 25, '12345678'],
        ['María', 'González', 17, '87654321'],
        ['Hugo','Fernando',16,'29487248']

        //... más filas si las tienes
      ]
    }
  }
}
</script>