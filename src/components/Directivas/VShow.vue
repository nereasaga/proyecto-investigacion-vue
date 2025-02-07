<template>
    <h2> Directiva v-show o @</h2>
    <div class="ejemplo">
      <button @click="mostrar = !mostrar">
        {{ mostrar ? "Ocultar" : "Mostrar" }} mensaje
      </button>
      
      <p v-show="mostrar">¡Este es un mensaje visible con v-show!</p>
      
    </div>
    <img :src="imagenVS" alt="vshow">
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const mostrar = ref(true) 

  const imagenVS = ref("src/assets/vshow.png")

  // import vshowImage from '@/assets/vshow.png'

  </script>
  <style scoped>
    .ejemplo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
    img  {
      width: 100%;
      padding-bottom: 2rem
    }
    h2 {
      padding-top: 2rem;
    }
    </style>