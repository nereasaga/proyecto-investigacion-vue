<template>
    <div>
      <h3>Componente Hijo</h3>
      <p>{{ mensaje }}</p> <!-- Muestra el valor proporcionado -->
    </div>
  </template>
  
  <script setup>
  import { inject } from "vue";
  
  // Recibir el dato global del padre
  const mensaje = inject("mensajeGlobal");
  </script>
  