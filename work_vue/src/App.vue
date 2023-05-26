<template>
  <div>
    <form @submit.prevent="addRow">
      <input v-model="newRow.nombre" placeholder="Nombre" />
      <input v-model="newRow.apellido" placeholder="Apellido" />
      <input v-model="newRow.edad" type="number" placeholder="Edad" />
      <input v-model="newRow.cedula" placeholder="Cédula" />
      <button type="submit">Agregar</button>
    </form>
    <dynamic-table :headers="headers" :rows="rows" @remove="removeRow"></dynamic-table>
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
      headers: ['Nombre', 'Apellido', 'Edad', 'Cédula', 'Mayor de Edad', 'Acciones'],
      rows: [
        {nombre: 'Juan', apellido: 'Pérez', edad: 25, cedula: '12345678'},
        {nombre: 'María', apellido: 'González', edad: 17, cedula: '87654321'},
        {nombre: 'Hugo', apellido: 'Fernando', edad: 16, cedula: '29487248'}

        //... más filas si las tienes
      ],
      newRow: {
        nombre: '',
        apellido: '',
        edad: '',
        cedula: ''
      }
    }
  },
  methods: {
    addRow() {
      this.rows.push({...this.newRow});
      this.newRow = {nombre: '', apellido: '', edad: '', cedula: ''};
    },
    removeRow(index) {
      this.rows.splice(index, 1);
    }
  }
}
</script>
