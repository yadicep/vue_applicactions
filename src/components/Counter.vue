<template>
   <!-- Contenedor con estilo Flexbox para centrar el contenido y que ocupe toda la altura de la ventana -->
   <div class="d-flex justify-content-center align-items-center max-vh-100 border border-black container-fluid">
      <div class="text-center text-white mb-2">
         <div>
            <!-- Título para la sección que indica el tema de la página -->
            <h4 class="text-warning">MANEJO DEL ESTADO CON VUEX</h4>
         </div><br>
         <div class="mb-3">
            <!-- Muestra el valor actual del contador desde el estado de Vuex -->
            <h5>Contador: {{ counter }}</h5>
            <!-- Botón para incrementar el contador, llama al método 'increment' al hacer clic -->
            <button @click="increment" class="btn me-3 button-blue">Incrementar</button>
            <!-- Botón para decrementar el contador, llama al método 'decrement' al hacer clic -->
            <button @click="decrement" class="btn button-red">Disminuir</button>
         </div>
      </div>
   </div>
</template>

<script setup>
   // Importa la función 'computed' para crear propiedades computadas en Vue 3
   import { computed } from 'vue';
   // Importa 'useStore' desde Vuex para acceder al estado global del store
   import { useStore } from 'vuex';
   
   // Inicializa el store de Vuex
   const store = useStore();
   // Crea una propiedad computada que accede al valor de 'counter' en el estado global
   const counter = computed(() => store.state.counter);
   
   // Define la función para llamar la acción 'increment' en Vuex
   const increment = () => store.dispatch('increment');
   // Define la función para llamar la acción 'decrement' en Vuex
   const decrement = () => store.dispatch('decrement');
</script>

<style scoped>
   /* Botón azul */
   .button-blue {
      margin: 30px auto;
      padding: 2px 10px;
      font-size: 1.2rem;
      color: #000;
      background-color: #00e5ff;
      border: 2px solid #00aaff;
      border-radius: 5px;
      box-shadow: 0 0 15px #00e5ff, 0 0 30px #00e5ff;
      transition: transform 0.2s, box-shadow 0.2s;
   }

   /* Efecto hover en el botón azul */
   .button-blue:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px #00aaff, 0 0 40px #00aaff;
   }

   /* Botón rojo */
   .button-red {
      margin: 20px auto;
      padding: 2px 10px;
      font-size: 1.2rem;
      color: #000;
      background-color: #ff4d4d;
      border: 2px solid #ff1a1a;
      border-radius: 5px;
      box-shadow: 0 0 15px #ff4d4d, 0 0 30px #ff4d4d;
      transition: transform 0.2s, box-shadow 0.2s;
   }

   /* Efecto hover en el botón rojo */
   .button-red:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px #ff1a1a, 0 0 40px #ff1a1a;
   }

   h4 {
      font-size: 1.6rem; /* Tamaño por defecto */
   }

   @media (max-width: 768px) { 
      h4 {
         font-size: 1.2rem; /* Ajuste para pantallas hasta 768px */
      }
   }

   @media (max-width: 480px) { 
      h4 {
         font-size: 0.9rem; /* Ajuste para pantallas hasta 480px */
      }
   }   
</style>