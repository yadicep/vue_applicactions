import router from '@/router'; // Importa el router de la aplicación desde la ruta especificada

// Prueba para verificar que el router tiene las rutas 'Home' y 'About'
test('router has Home and About routes', () => {
   expect(router.hasRoute('Home')).toBe(true); // Se espera que el router contenga una ruta llamada 'Home'
   expect(router.hasRoute('About')).toBe(true); // Se espera que el router contenga una ruta llamada 'About'
});