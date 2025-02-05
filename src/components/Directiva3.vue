<template>
    <h2> Directiva v-show </h2>
    <div class="ejemplo">
      <button @click="mostrar = !mostrar">
        {{ mostrar ? "Ocultar" : "Mostrar" }} mensaje
      </button>
      
      <p v-show="mostrar">¡Este es un mensaje visible con v-show!</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const mostrar = ref(true) 
  </script>
  <style scoped>
    .ejemplo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
    </style>