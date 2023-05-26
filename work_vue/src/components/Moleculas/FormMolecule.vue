<template>
    <form @submit.prevent="submitForm">
      <input-atom :value="newRow.nombre" @update:value="value => newRow.nombre = value" placeholder="Nombre" />
      <input-atom :value="newRow.apellido" @update:value="value => newRow.apellido = value" placeholder="Apellido" />
      <input-atom :value="newRow.edad" @update:value="value => newRow.edad = value" placeholder="Edad" />
      <input-atom :value="newRow.cedula" @update:value="value => newRow.cedula = value" placeholder="Cédula" />
      <button-atom type="submit">Agregar</button-atom>
    </form>
  </template>
  
  <script>
  import InputAtom from '../Atomos/InputAtom.vue';
  import ButtonAtom from '../Atomos/ButtonAtom.vue';
  
  export default {
    components: {
      InputAtom,
      ButtonAtom
    },
    data() {
      return {
        newRow: {
          nombre: '',
          apellido: '',
          edad: '',
          cedula: ''
        }
      }
    },
    methods: {
      submitForm() {
        this.$emit('submit', {...this.newRow});
        this.newRow = {nombre: '', apellido: '', edad: '', cedula: ''};
      }
    }
  }
  </script>
  