<template>
    <h2>Directiva v-if/v-else-if/v-else </h2>
    <div class="ejemplo">
        <input type="number" v-model="edad" placeholder="Ingresa tu edad">
    
    <p v-if="edad < 18"> Eres menor de edad.</p>
    <p v-else-if="edad >= 18 && edad < 65"> Eres un adulto.</p>
    <p v-else> Disfruta de tu jubilación.</p>
  </div>
  <img :src="imagenVIE" alt="vifelse">
</template>

<script setup>
import { ref } from 'vue'

const edad = ref(null) 

  const imagenVIE = ref("src/assets/vifelse.png") 

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