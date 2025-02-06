<template>
    <h2>Directiva v-model </h2>
    <div class="ejemplo">

      <input v-model="nombre" type="text" placeholder="Escribe tu nombre">
      
      <p>Hola, {{ nombre }}! </p>
    </div>
    <img :src="imagenVModel" alt="vmodel">
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const nombre = ref("")

  const imagenVModel = ref("src/assets/vmodel.png") 
  </script>
  
  <style scoped>
  .ejemplo {
    text-align: center;
    margin-top: 20px;
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
  h2 {
    padding-top: 2rem;
  }
  
  input {
    padding: 8px;
    font-size: 16px;
  }
  </style>