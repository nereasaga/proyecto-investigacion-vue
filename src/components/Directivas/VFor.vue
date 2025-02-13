<template>
    <h2> Directiva v-for </h2>
    <div class="ejemplo">
      <h3>Lista de Nombres</h3>
      <ul>
        <li v-for="persona in personas" :key="persona.id">
          {{ persona.nombre }}
        </li>
      </ul>
    </div>
    <img :src="imagenVFor" alt="vfor">
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const personas = ref([
    { id: 1, nombre: "Jon" },
    { id: 2, nombre: "Ane" },
    { id: 3, nombre: "María" },
    { id: 4, nombre: "Gorka" }
  ])

  const imagenVFor = ref("src/assets/vfor.png") 
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

img {
  width: 60%
}
</style>