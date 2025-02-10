<template>
    <div>
      <h2>Componente Hijo</h2>
      <p>{{ mensaje }}</p> <!-- Aquí debería aparecer el mensaje -->
    </div>

    <div class="btn">
    <!-- Al hacer clic en el botón, se emite el evento 'saludar' -->
    <button @click="$emit('saludar')">Saludar al padre</button>
  </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  // Recibir la prop del padre correctamente
  const props = defineProps(["mensaje"]);

  defineEmits(["saludar"]); // Definir que el hijo puede emitir el evento
  </script>
  