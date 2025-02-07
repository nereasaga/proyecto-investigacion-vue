<script setup>
import { ref, computed } from 'vue';
import imagenComp from '@/assets/imagen_computed.png'

const peso = ref(70);
const altura = ref(1.75);

// Propiedad computada para el IMC
const imc = computed(() => {
  return (peso.value / (altura.value ** 2)).toFixed(2);
});

// Propiedad computada para el estado del IMC
const estadoIMC = computed(() => {
  const valor = parseFloat(imc.value);
  if (valor < 18.5) return 'Bajo peso';
  if (valor < 24.9) return 'Normal';
  if (valor < 29.9) return 'Sobrepeso';
  return 'Obesidad';
});
</script>

<template>
  <div>

    <h2>Ejemplo Computed</h2>
    <input v-model="peso" placeholder="Peso (kg)">
    <input v-model="altura" placeholder="Altura (m)">
    <p>Tu IMC es: {{ imc }}</p>
    <p>Estado: {{ estadoIMC }}</p>

    <img :src="imagenComp" alt="imagen ejepmlo computed">
  </div>

  
</template>