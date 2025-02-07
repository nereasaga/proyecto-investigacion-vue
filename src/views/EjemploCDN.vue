<template>
  <div class="mi-vista">
    <h1>CDN</h1>
    <p>Ejemplo de página con uso de CDN.</p>
    <button @click="abrirPaginaEstatica">Abrir Página Estática</button>
      <div><button @click="goToHome"> Ir a Inicio</button></div>
  </div>
</template>

<script>
//import { useRouter } from 'vue-router';

export default {
  name: 'MiVista',
  methods: {
    abrirPaginaEstatica() {
      // Abre la página estática en otra pestaña del navegador
      window.open('/Vue-to-do-list.html', '_blank');
    },
    goToHome() {
      this.$router.push('/'); // Usamos this.$router para navegar a la página de inicio
    },
  }
};

</script>

<style scoped>
.mi-vista {
  text-align: center;
  margin-top: 50px;
  font-size:1.5rem;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin:1rem;
}

button:hover {
  background-color: #0056b3;
}
</style>