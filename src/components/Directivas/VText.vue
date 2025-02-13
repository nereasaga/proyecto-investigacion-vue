<template>
      <h2> Directiva v-text </h2>  
    <div class="prueba">

      <div>{{ nickname }}</div>
      <div v-text="nickname"></div> 
    </div>
    <img class="ejemplo" :src="imgVT" alt="vbind">
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const nickname = ref('Nere')
  const imgVT = ref('src/assets/vtext.png')
  </script>
  <style scoped>
    .prueba {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
    .ejemplo  {

      padding-bottom: 2rem
    }

    img {
    width: 40%
  }

    /* h2 {
      padding-top: 2rem;
    } */
    </style>