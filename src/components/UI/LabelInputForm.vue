<script setup>
import { defineProps } from 'vue';

defineProps({
  class: String,
});
</script>

<template>
  <div>
    <label :class="class">
      <slot />
    </label>
  </div>
</template>

<style scoped>
.user-form__label {
  font-size: 0.875rem;
  font-weight: 400;
}
</style>
