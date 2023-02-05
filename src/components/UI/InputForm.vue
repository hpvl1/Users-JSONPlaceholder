<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const emits = defineEmits(['update:modelValue']);

const { modelValue } = defineProps({
  modelValue: String,
  class: String,
  type: {
    type: String,
    default: 'text',
    validator: (val) =>
      [
        'text',
        'password',
        'tel',
        'email',
        'search',
        'textarea',
        'time',
        'url',
        'number',
        'file',
      ].includes(val),
  },
});
const value = ref(modelValue);
watch(value, () => {
  emits('update:modelValue', value.value);
});
</script>

<template>
  <div>
    <v-text-field v-model="value" :type="type" :class="class" outlined required></v-text-field>
  </div>
</template>

<style scoped></style>
