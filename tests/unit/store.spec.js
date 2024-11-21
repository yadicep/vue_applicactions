import { createStore } from 'vuex'; // Importa la función createStore de Vuex para crear el store de la aplicación

// Declaramos una variable global 'store' que contendrá el store de Vuex en cada prueba
let store;

// La función beforeEach se ejecuta antes de cada prueba individual
beforeEach(() => {
   // Inicializa el store antes de cada prueba
   store = createStore({
      state: {
         counter: 0, // Estado inicial con un contador que comienza en 0
      },
      mutations: {
         increment(state) { // Mutación para incrementar el contador
            state.counter++; // Incrementa el valor de counter en 1
         },
         decrement(state) { // Mutación para decrementar el contador
            state.counter--; // Decrementa el valor de counter en 1
         },
      },
   });
});

// Prueba para verificar que el valor inicial del contador es 0
test('initial counter value is 0', () => {
   expect(store.state.counter).toBe(0); // Se espera que el valor inicial de counter sea 0
});

// Prueba para verificar que el contador incrementa de 0 a 1
test('increments the counter from 0 to 1', () => {
   store.commit('increment'); // Llama a la mutación 'increment' para aumentar el contador
   expect(store.state.counter).toBe(1); // Verifica que el contador ahora es 1
});

// Prueba para verificar que el contador decremente de 1 a 0
test('decrements the counter from 1 to 0', () => {
   store.commit('increment'); // Incrementa primero el contador para que pase a 1
   store.commit('decrement'); // Llama a la mutación 'decrement' para disminuir el contador
   expect(store.state.counter).toBe(0); // Verifica que el contador volvió a 0
});

// Prueba para verificar que el contador decremente de 0 a -1
test('decrements the counter from 0 to -1', () => {
   store.commit('decrement'); // Llama a la mutación 'decrement' para disminuir el contador desde 0
   expect(store.state.counter).toBe(-1); // Verifica que el contador ahora es -1
});