<template>
  <div class="reactive">
    <h1>Componente Reactivo</h1>
    <h2>Uso de ref, reactive y toRefs</h2>
    
    <div>
      <h3>ref</h3>
      <p>Contador: {{ contador }}</p>
      <!-- Este botón incrementa el valor del contador cada vez que se presiona, demostrando el uso de ref. -->
      <button @click="contador++">Incrementar</button>
    </div>
    
    <div>
      <h3>reactive y toRefs</h3>
      <p>Nombre: {{ nombre }}</p>
      <!-- El uso de v-model permite que el usuario edite directamente el valor de nombre, reflejando cambios en el objeto reactivo datos. -->
      <input v-model="nombre" placeholder="Editar nombre" />
      <p>Edad: {{ edad }}</p>
      <button @click="edad++">Aumentar Edad</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';

// ref se usa para crear una variable reactiva primitiva. En este caso, contador inicia en 0 y puede cambiar con la interacción del usuario.
const contador = ref(0);
// reactive se usa para crear un objeto reactivo, permitiendo que sus propiedades sean modificadas sin perder su reactividad.
const datos = reactive({ nombre: 'Juan', edad: 25 });
// toRefs se usa para convertir las propiedades de un objeto reactive en referencias reactivas individuales, lo que facilita su uso en v-model.
const { nombre, edad } = toRefs(datos);
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
  margin: 20px;
}
button {
  margin-left: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
input {
  margin-left: 10px;
  padding: 5px;
}
</style>npm 