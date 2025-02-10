<template>
  <div class="reactive">
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
<style scoped>
.reactive, button{
  font-size:1.2rem;
  padding:0.5rem;
}
</style>