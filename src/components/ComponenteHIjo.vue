<template>
  <div class="ejemplo">

      <h2>Componente Hijo</h2>
      <p>{{ mensaje }}</p> <!-- Aquí debería aparecer el mensaje -->


    <!-- Al hacer clic en el botón, se emite el evento 'saludar' -->
    <button class="btn" @click="$emit('saludar')">Darle el toque al padre</button>
</div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  // Recibir la prop del padre correctamente
  const props = defineProps(["mensaje"]);

  defineEmits(["saludar"]); // Definir que el hijo puede emitir el evento
  </script>

  <style scoped>
  .ejemplo { 
    padding: 3rem;
    border: 2px solid rgb(144, 171, 245);
    display: flex;
  flex-direction: column;
    /* width: 80%; */
    justify-content: center;
    align-items: center;
    margin: 1rem}
</style>
  