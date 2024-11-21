<template>
   <div class="home-view">
      <img src="../assets/img/home.png" class="img-fluid" alt="Home">
      <p>Este es el Home de mi aplicación</p>
   </div>
</template>

<style scoped>
   p {
      font-size: 2rem;
   }

   /* Ajustes para pantallas medianas (tabletas) */
   @media (max-width: 768px) { 
      p {
         font-size: 1.3rem; 
      }
      img {
         width: 60%; /* Ajusta el tamaño al 60% en pantallas más pequeñas */
         margin: 0 auto; /* Centra la imagen */
      }
   }

   /* Ajustes para pantallas más pequeñas (móviles) */
   @media (max-width: 480px) { 
      p {
         font-size: 1rem;
      }
      img {
         width: 50%; /* Ajusta el tamaño al 50% en pantallas más pequeñas */
      }
   }
</style>