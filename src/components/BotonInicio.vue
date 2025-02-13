<script setup>
import { useRouter } from 'vue-router';

const router = useRouter(); 

const goToHome = () => {
  router.push('/'); 
};
</script>

<template>
    <button @click="goToHome"> Ir a Inicio</button>

</template>

<style scoped>

button {
  margin: 4rem;
  padding: 2rem;
  margin-top: 3rem;
  font-size: 16px;
  cursor: pointer;
  width: 35%;
  margin: 0 auto;
}
</style>