<template>
  <div>
    <h1>Componente Reactivo</h1>
    <p>Contador: {{ counter }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ReactiveComponent',
  setup() {
    const counter = ref(0);

    function increment() {
      counter.value++;
    }

    return {
      counter,
      increment
    };
  }
};
</script>