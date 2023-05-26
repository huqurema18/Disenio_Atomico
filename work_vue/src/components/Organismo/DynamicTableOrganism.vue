<template>
  <div>
    <form-molecule @submit="addRow" />
    <dynamic-table :headers="headers" :rows="rows" @remove="removeRow" />
  </div>
</template>

<script>

import DynamicTable from '../Templats/DynamicTable.vue';
import FormMolecule from '../Moleculas/FormMolecule.vue';

export default {
  components: {
    FormMolecule,
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
      ]
    }
  },
  methods: {
    addRow(newRow) {
      this.rows.push(newRow);
    },
    removeRow(index) {
      this.rows.splice(index, 1);
    }
  }
}
</script>
