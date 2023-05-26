<template>
  <div>
    <div>
      <input v-model="newRow.name" placeholder="Nombre" />
      <input v-model="newRow.surname" placeholder="Apellido" />
      <input v-model="newRow.age" type="number" placeholder="Edad" />
      <input v-model="newRow.id" placeholder="Cédula" />
      <button @click="addRow">Agregar</button>
    </div>
    <dynamic-table :headers="headers" :rows="rows" @remove="removeRow"></dynamic-table>
    <div>Mayores de edad: {{ adults }}</div>
    <div>Menores de edad: {{ minors }}</div>
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
      headers: ['Nombre', 'Apellido', 'Edad', 'Cédula', 'Acciones'],
      rows: [
        {name: 'Juan', surname: 'Pérez', age: 25, id: '12345678'},
        {name: 'María', surname: 'González', age: 17, id: '87654321'},
        {name: 'Hugo', surname: 'Fernando', age: 16, id: '29487248'},
      ],
      newRow: {
        name: '',
        surname: '',
        age: '',
        id: ''
      }
    }
  },
  computed: {
    adults() {
      return this.rows.filter(row => row.age >= 18).length;
    },
    minors() {
      return this.rows.filter(row => row.age < 18).length;
    }
  },
  methods: {
    addRow() {
      this.rows.push({...this.newRow});
      this.newRow = {name: '', surname: '', age: '', id: ''};
    },
    removeRow(index) {
      this.rows.splice(index, 1);
    }
  }
}
</script>
