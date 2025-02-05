<template>

    <div>
        <h2>Ejemplo Computed</h2>
      <input v-model="peso" placeholder="Peso (kg)">
      <input v-model="altura" placeholder="Altura (m)">
      <p>Tu IMC es: {{ imc }}</p>
      <p>Estado: {{ estadoIMC }}</p>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const peso = ref(70);
      const altura = ref(1.75);
  
      const imc = computed(() => {
        return (peso.value / (altura.value ** 2)).toFixed(2);
      });
  
      const estadoIMC = computed(() => {
        const valor = parseFloat(imc.value);
        if (valor < 18.5) return 'Bajo peso';
        if (valor < 24.9) return 'Normal';
        if (valor < 29.9) return 'Sobrepeso';
        return 'Obesidad';
      });
  
      return { peso, altura, imc, estadoIMC };
    }
  };
  </script>