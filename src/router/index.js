import { createRouter, createWebHistory } from 'vue-router'; // Importa las funciones necesarias para crear el router y usar el historial de navegación del navegador
import HomeView from '../views/HomeView.vue'; // Importa el componente para la vista Home
import AboutView from '@/views/AboutView.vue'; // Importa el componente para la vista About

// Define las rutas de la aplicación
const routes = [
   {
      path: '/', // Ruta raíz que corresponde a la página principal
      name: 'Home', // Nombre de la ruta
      component: HomeView, // Componente que se renderiza para esta ruta
   },
   {
      path: '/about', // Ruta para la página "About"
      name: 'About', // Nombre de la ruta
      component: AboutView, // Componente que se renderiza para esta ruta
   },
];

// Crea una instancia del router (genera un objeto específico que contiene toda la configuración y lógica necesarias para manejar la navegación entre vistas en una aplicación de Vue)
const router = createRouter({
   history: createWebHistory(process.env.BASE_URL), // Configura el historial de navegación para una aplicación web moderna
   routes, // Asigna el array de rutas definidas anteriormente
});

export default router; // Exporta la instancia del router para que pueda ser utilizada en la aplicación