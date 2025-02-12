<template>
  <div class="mi-vista">
    <h1>CDN</h1>
    <p>Ejemplo de página con uso de CDN.</p>
    <button  @click="abrirPaginaEstatica">Abrir Página Estática</button>
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
  font-size:1rem;
}
</style>