<template>
   <div class="d-flex justify-content-center align-items-center">
      <div class="input-group mb-3 w-75">
         <!-- Campo de entrada de texto con v-model para enlazar el valor a 'text' y enviar al presionar Enter -->
         <input v-model="text" @keydown.enter="sendText" placeholder="Ingresa el mensaje" type="text" class="form-control"/>
         <!-- Botón para enviar el texto, llama a la función 'sendText' al hacer clic -->
         <button @click="sendText" class="btn btn-secondary">Enviar a Papá</button>
      </div>
   </div>
</template>

<script setup>
   import { ref } from 'vue'; // Importa ref de Vue para crear una referencia reactiva
   
   const text = ref(''); // Crea una referencia reactiva para almacenar el texto ingresado
   const emit = defineEmits(['send-text']); // Define un evento 'send-text' para emitir al componente padre
   
   function sendText() {
      if (text.value.trim() !== '') { // Verifica que el texto no esté vacío antes de enviarlo
         emit('send-text', text.value); // Emite el texto ingresado al componente Parent
         text.value = ''; // Limpia el campo de entrada después de enviar el mensaje
      }
   }
</script>