<template>
    <div>
      <!-- Pasar la prop 'mensaje' al hijo -->
      <ComponenteHijo mensaje="¡Hola desde el padre!" />
    </div>

    <div>
    <h2 style="font-weight: bold; margin-top: 2rem;" >Componente Padre</h2>
    <!-- Escuchar el evento 'saludar' y ejecutar 'mostrarMensaje' -->
    <ComponenteHijo @saludar="mostrarMensaje" />
  </div>
  </template>
  
  <script setup>
  import ComponenteHijo from "./ComponenteHIjo.vue"; // Importar el componente hijo

  // Función que se ejecuta cuando el hijo emite el evento
const mostrarMensaje = () => {
  alert("¡El hijo ha saludado al padre!");
};
  </script>