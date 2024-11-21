<template>
   <div class="text-white">
      <!-- Componente hijo que emite un evento llamado 'send-text' al padre -->
      <Child @send-text="receiveText" />
      <!-- Muestra el mensaje recibido del hijo en el componente padre -->
      <p>Hijo, he recibido tu mensaje: {{ receivedText }}</p>
   </div>
</template>

<script setup>
   import Child from './Child.vue'; // Importa el componente Child desde el archivo Child.vue
   import { ref } from 'vue'; // Importa la función ref de Vue para crear una referencia reactiva

   // Define una variable reactiva para almacenar el texto recibido del componente hijo
   const receivedText = ref('');

   // Función que actualiza el valor de 'receivedText' con el texto emitido por el hijo
   function receiveText(text) {
      receivedText.value = text;
   }
</script>