import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Crea la aplicación Vue, usa el store de Vuex y el router, y monta la aplicación en el elemento con el id 'app'
createApp(App).use(store).use(router).mount('#app')