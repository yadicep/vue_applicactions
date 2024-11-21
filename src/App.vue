<template>
   <div id="app">
      <!-- Barra de navegación principal con estilo oscuro y fondo transparente -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
         <div class="container-fluid">

            <!-- Logo de texto a la izquierda que redirige a la página principal -->
            <router-link to="/" class="navbar-brand">
               <h4 class="text-warning">NAVEGACIÓN CON VUE ROUTER</h4>
            </router-link>
            
            <!-- Botón de toggle para dispositivos móviles que muestra/oculta el menú de navegación -->
            <button 
               class="navbar-toggler" 
               type="button" 
               data-bs-toggle="collapse" 
               data-bs-target="#navbarNav" 
               aria-controls="navbarNav" 
               aria-expanded="false" 
               aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menú de navegación que se muestra al expandirse -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul class="navbar-nav mx-end">
                  <!-- Enlace de navegación a la página de inicio -->
                  <li class="nav-item">
                     <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <!-- Enlace de navegación a la página 'About' -->
                  <li class="nav-item">
                     <router-link to="/about" class="nav-link">About</router-link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>

      <!-- Contenido principal -->
      <div class="main-content text-white text-center mb-3 pb-3">
         <!-- Componente router-view que renderiza las rutas actuales -->
         <router-view />
      </div>

      <hr class="bg-white w-75 mx-auto" style="height: 6px;">

      <!-- Sección para la comunicación entre componentes con título -->
      <div class="text-center mb-3 pb-3">
         <h4 class="text-warning">COMUNICACIÓN ENTRE COMPONENTES</h4><br>
         <!-- Componente Parent que se utiliza en la comunicación entre componentes -->
         <Parent />
      </div>

      <hr class="bg-white w-75 mx-auto" style="height: 6px;">

      <!-- Componente Counter que muestra un contador en la aplicación -->
      <Counter />
   </div>
</template>

<script setup>
   import Counter from './components/Counter.vue';
   import Parent from './components/Parent.vue';
</script> 

<style scoped>
   h4 {
      font-size: 1.6rem;
   }

   @media (max-width: 768px) { 
      h4 {
         font-size: 1.2rem; 
      }
   }

   @media (max-width: 480px) { 
      h4 {
         font-size: 0.9rem;
      }
   }
</style>