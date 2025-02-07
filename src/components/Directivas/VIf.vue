<template>
    <h2>Directiva v-if </h2>
    <div class="ejemplo">
      <button @click="mostrar = !mostrar">Toggle Mensaje</button>
      
      <p v-if="mostrar">¡Hola! </p>
      <p v-else>¡Adios! </p>
    </div>
    <img :src="imagenVI" alt="vshow">
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const mostrar = ref(true)
  const imagenVI = ref("src/assets/vif.png") 

  </script>

  <style scoped>
    .ejemplo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
  h2 {
    padding-top: 2rem;
  }
  </style>