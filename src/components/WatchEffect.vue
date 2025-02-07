<script setup>
import { ref, watchEffect } from 'vue';

const titulo = ref('Inicio');

// Actualizar el título de la página cuando cambia
watchEffect(() => {
  document.title = titulo.value;
});
</script>

<template>
  <input v-model="titulo" placeholder="Título de la página">
</template>