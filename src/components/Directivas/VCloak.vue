<template>
<h2>Directiva v-cloak</h2>
    <div class="ejemplo" v-cloak>
      <p>{{ mensaje }}</p>
    </div>
    <img :src="imagenVCloak" alt="vcloak">
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const mensaje = ref("Vue se ha cargado correctamente")

  const imagenVCloak = ref("src/assets/vcloak.png") 
  </script>
  
  <style scoped>
  [v-cloak] {
    display: none;
  }
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

  img {
    padding-bottom: 10rem;
    width: 50%
  }
  </style>