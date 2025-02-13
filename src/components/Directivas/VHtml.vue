<template>
    <h2>Directiva v-html</h2> 
    <div class="ejemplo">
      <p v-html="contenido"></p>
    </div>
    <img :src="imagenVHtml" alt="vhtml">
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const contenido = ref("<i>Estoy insertando este texto en cursiva</i> <br> Y este otro sin ella.")

  const imagenVHtml = ref("src/assets/vhtml.png") 
  </script>

<style scoped>
.ejemplo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    font-family:Arial, Helvetica, sans-serif;
}
h2 {
padding-top: 2rem;
}

img {width: 80%}
</style>