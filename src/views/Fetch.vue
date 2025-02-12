<template>
    <section>
    <div v-for="(user, index) in results" :key="index" class="card">
        <h3>{{ user.name.first }}</h3>
        <img :src="user.picture.medium" alt="user.picture.medium">
        <p>{{ user.location.city }}</p>
        <p>{{ user.dob.age }}</p>
    </div>
</section>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue';
    const results = ref([])


  const fetchPerson = async () => {
    const respuesta = await fetch ('https://randomuser.me/api/?results=16');
    const data = await respuesta.json();
    results.value = data.results;

  }


  fetchPerson()
  // onMounted(fetchPerson);

  </script>

  <style scoped>
    section {
        display: flex;
        flex-wrap: wrap;
    }

    .card {
      box-sizing: content-box;
      padding: 3rem;
      text-wrap: balance;


    }



</style>