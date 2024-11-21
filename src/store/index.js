import { createStore } from 'vuex'; // Importa la función createStore de Vuex para crear el store de la aplicación

// Exporta el store de Vuex
export default createStore({

   // Estado inicial de la aplicación
   state: {
      counter: 0, // Define un contador inicializado en 0
   },

   // Mutaciones para modificar el estado de forma síncrona
   mutations: {
      increment(state) { // Mutación para incrementar el contador
         state.counter++; // Incrementa el valor de counter en 1
      },
      decrement(state) { // Mutación para decrementar el contador
         state.counter--; // Decrementa el valor de counter en 1
      },
   },
   
   // Acciones para realizar operaciones asíncronas o despachar mutaciones
   actions: {
      increment({ commit }) { // Acción para incrementar el contador
         commit('increment'); // Llama a la mutación 'increment'
      },
      decrement({ commit }) { // Acción para decrementar el contador
         commit('decrement'); // Llama a la mutación 'decrement'
      },
   },
});