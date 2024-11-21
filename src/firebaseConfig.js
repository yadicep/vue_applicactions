// Importación de funciones de SDKs
import { initializeApp } from "firebase/app";

// Configuración personalizada del proyecto en la consola
const firebaseConfig = {
   apiKey: "AIzaSyCWBF8lrEKTFVFo1BEiN_QMcIlUQk-HWCI",
   authDomain: "pruebam7-af3a1.firebaseapp.com",
   projectId: "pruebam7-af3a1",
   storageBucket: "pruebam7-af3a1.firebasestorage.app",
   messagingSenderId: "958114029231",
   appId: "1:958114029231:web:b2f1f0e5224294620bfe5a"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de la aplicación Firebase para usarla en otros módulos
export { app };