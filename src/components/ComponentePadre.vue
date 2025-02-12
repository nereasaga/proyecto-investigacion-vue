<template>
  <div class="ejemplo">
  <h2>Hola, soy el Componente padre</h2>
  <h3>Y aquí he importado a mi hijo:</h3>
    <div>
      <!-- Pasar la prop 'mensaje' al hijo -->
      <ComponenteHijo @saludar="mostrarMensaje" mensaje="¡este es un mensaje enviado desde el padre!"  />
    </div>

    <!-- <div>
    <h2 style="font-weight: bold; margin-top: 2rem;" >Componente Padre</h2> -->
    <!-- Escuchar el evento 'saludar' y ejecutar 'mostrarMensaje' -->
    <!-- <ComponenteHijo @saludar="mostrarMensaje" />
    </div> -->

</div>
  </template>
  
  <script setup>
  import ComponenteHijo from "./ComponenteHIjo.vue"; // Importar el componente hijo


  // Función que se ejecuta cuando el hijo emite el evento
const mostrarMensaje = () => {
  alert("¡Mi hijo me ha dado el toque para que lance este alert!");
};
  </script>
  <style scoped>
  .ejemplo { 
    border: 2px solid rgb(144, 171, 245);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
   }
</style>