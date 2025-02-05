<template>
    <h2>Directiva v-bind o : </h2>
    <div class="imagen">
      <img :src="image" :alt="text">
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const image = ref("src/assets/logo.svg")
  const text = ref("Logo")
  </script>
  <style scoped>
    .imagen {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
    img {
        width: 100px;
        height: 100px;
    }
    </style>