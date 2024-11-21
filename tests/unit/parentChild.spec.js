import { mount } from '@vue/test-utils'; // Importa la función mount de @vue/test-utils para montar componentes en pruebas
import Parent from '@/components/Parent.vue'; // Importa el componente Parent desde la ruta especificada

// Prueba para verificar que el texto se emite correctamente desde el componente Child al componente Parent
test('emits text from Child to Parent', async () => {
   const wrapper = mount(Parent); // Monta el componente Parent
   const child = wrapper.findComponent({ name: 'Child' }); // Encuentra el componente Child dentro de Parent

   await child.find('input').setValue('Hello'); // Establece el valor 'Hello' en el campo de texto del Child
   await child.find('button').trigger('click'); // Simula un clic en el botón del Child para emitir el valor

   expect(wrapper.text()).toContain("Hello"); // Verifica que el texto 'Hello' se muestra en el componente Parent
});