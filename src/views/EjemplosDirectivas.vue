<template>
    <div class="prueba">
      <div>{{ nickname }}</div>
      <div v-text="nickname"></div> 
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const nickname = ref('Nere')
  </script>