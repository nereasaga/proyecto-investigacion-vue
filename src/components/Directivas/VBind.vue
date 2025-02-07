<template>
    <h2>Directiva v-bind o : </h2>
    <div class="imagen">
      <img class="logo" :src="image" :alt="text">
    </div>
    <img class="ejemplo" :src="imagenVB" alt="vbind">
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const image = ref("src/assets/logo.svg")
  const text = ref("Logo")
  const imagenVB = ref("src/assets/vbind.png")
  </script>
  <style scoped>
    .imagen {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
    .logo {
        width: 100px;
        height: 100px;
    }

    .ejemplo  {
      width: 100%;
      padding-bottom: 2rem
    }
    h2 {
      padding-top: 2rem;
    }
    </style>