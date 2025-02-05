<template>
      <h2> Directiva v-text </h2>  
    <div class="prueba">

      <div>{{ nickname }}</div>
      <div v-text="nickname"></div> 
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const nickname = ref('Nere')
  </script>
  <style scoped>
    .prueba {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
    </style>