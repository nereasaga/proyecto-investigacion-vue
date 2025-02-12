<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderComponent.vue'

import Footer from './components/FooterComponent.vue'
</script>
     
<template>

      <Header >
         </Header>
         <!--<div class="wrapper">-->

       <!-- <RouterLink to="/about">About</RouterLink> -->
      <!-- <nav> -->
        <!-- <RouterLink to="/">Home</RouterLink> -->
  <!--   <RouterLink to="/ejemplo-CSS-global-local">Ejemplo CSS global y local</RouterLink>
        <RouterLink to="/ejemplo-CDN">Ejemplo CDN</RouterLink>
        <RouterLink to="/ejemplos-directivas">Ejemplos Directivas</RouterLink>
        <RouterLink to="/ejemplocomputed">Ejemplos Computed</RouterLink>
        <RouterLink to="/ejemplos-wacht-effect">Ejemplos Watch - Effect</RouterLink>
        <RouterLink to="/ejemplo-reactividad">Ejemplos Reactividad</RouterLink>
        <RouterLink to="/ejemplo-props">Ejemplo Props</RouterLink>
        <RouterLink to="/ejemplo-provideinject">Ejemplo Provide e Inject</RouterLink>
      </nav>
        </div>  --> 


  <RouterView />
   <Footer>

   </Footer>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
