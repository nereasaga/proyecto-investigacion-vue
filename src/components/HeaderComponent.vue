<script setup>
import { ref } from 'vue';

// Definimos variables reactivas con ref()
const title = ref('Investigacion de vue');
const description = ref('Vue.js es un framework progresivo para construir interfaces de usuario.');

</script>

<template>
    <header>
     <div class="investigacion-container">
        <!--mostramos el titulo de forma dinamica-->
         <h1>{{ title }}</h1>

         <!--mostramos el descripcion de forma dinamica-->
         <p>{{ description }}</p>
        </div>
    </header>

        <header class="header">
           <nav>
            <ul>
                <li><router-link to="/ejemplo-CDN">Ejemplo CDN</router-link></li>          
                <li><router-link to="/ejemplo-CSS-global-local">Ejemplo CSS </router-link></li>
                <li><router-link to="/ejemplos-directivas">Ejemplo Directivas</router-link></li>
                <li><router-link to="/ejemplocomputed">Ejemplo Computed</router-link></li>
                <li><router-link to="/ejemplos-wacht-effect">Ejemplo Watch Effect</router-link></li>
                <li><router-link to="/ejemplo-reactividad">Ejemplo Reactivity</router-link></li>
                <li><router-link to="/ejemplo-props">Ejemplo Props</router-link></li>
                <li><router-link to="/ejemplo-provideinject">Ejemplo Provide & Inject</router-link></li>
                <li><RouterLink to="/fetch">Fetch</RouterLink></li>

            </ul>
           </nav>

        </header>
  </template>
  
  <style scoped>
   
   .investigacion-container{
      background-color: rgb(161, 98, 156);
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 10px;
      font-family: Arial, sans-serif; 
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

   }

   .header{
    text-align: center;
    padding: 20px;
    background-color: #948484;
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   }

   nav ul{
    list-style: none;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
   }
   nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
   }
   nav a:hover{
    text-decoration: underline;
   }

   @media (max-width: 600px) {
    nav ul{
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    nav a {
        font-size: 1.2rem;
    }
   }
   
 @media (max-width: 800px) {
    nav ul {
        gap: 12px;
        font-size: 1.1rem;
    }
 }
 </style>