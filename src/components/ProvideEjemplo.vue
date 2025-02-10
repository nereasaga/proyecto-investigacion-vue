<template>
    <div>
      <h2>Componente Padre</h2>
      <ProvideHijo /> <!-- Llamamos al hijo, que usará inject -->
    </div>
  </template>
  
  <script setup>
  import { provide } from "vue";
  import ProvideHijo from "./ProvideHijo.vue"; // Importar el hijo
  
  // Definir un dato global y "proveerlo"
  provide("mensajeGlobal", "¡Hola desde Provide! 🚀");
  </script>
  