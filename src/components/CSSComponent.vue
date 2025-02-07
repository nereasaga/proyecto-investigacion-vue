<template>
  <div>
    <h1 class="miEstilo" id="miElemento">CSS Componente</h1>
    <p>Todas las páginas aplican estilos definidos en el archivo assets/main.css.</p>
    <p>Se indica esto en el archivo main.jscon :<span>import './assets/main.css'</span></p>
    <p>En este párrafo se aplican estilos CSS local (scoped).</p>
    <button @click="cambiarTexto">Cambiar estilo al título h1</button>
  </div>
</template>

<script>
export default {
  name: 'CSSComponent',
  methods: {
    cambiarTexto() {
     // alert('¡Botón clicado!');
      // Realizamos el toggle de la clase miEstilo
      const elemento = document.getElementById('miElemento');
      elemento.classList.toggle('miEstilo');

    }
  }
}
</script>

<style scoped>
/* Estilos locales - solo afectan a este componente */
h1 {
  color: #5f6368; /* Color específico solo para el h1 dentro de este componente */
}

p {
  font-size: 16px;
  color: #555;
  line-height: 1.5;
}

button {
  background-color: #ff6347; /* Estilo diferente para el botón en este componente */
  font-size: 1rem;
}

button:hover {
  background-color: #ff4500;
}
span{
 color:red;
 font-weight:bold;

}
.miEstilo{
  color:green;
  font-size:3rem;
}
</style>