<script setup>
import { ref, watch } from 'vue';

const email = ref('');
const error = ref('');

// Observar cambios en email para validar
watch(email, (nuevoEmail) => {
  if (!nuevoEmail.includes('@')) {
    error.value = 'El email debe contener @';
  } else {
    error.value = '';
  }
});
</script>

<template>
  <input v-model="email" placeholder="Email">
  <p v-if="error" style="color: red">{{ error }}</p>
</template>