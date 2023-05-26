<template>
  <input :type="type" :value="value" @input="updateValue" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    value: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
  },
  methods: {
    updateValue(event) {
      this.$emit('update:value', event.target.value);
    }
  }
}
</script>
