// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Importa Firestore si lo necesitas
import { getAuth } from "firebase/auth";  // Importa Auth si lo necesitas
// Agrega otros productos de Firebase que planeas usar

// Configuración de tu aplicación de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVRhlnLNz8aCA9n07HUP8eWS_WjR-SIrw",
  authDomain: "gestioncitasmedicas-fc43e.firebaseapp.com",
  projectId: "gestioncitasmedicas-fc43e",
  storageBucket: "gestioncitasmedicas-fc43e.appspot.com",
  messagingSenderId: "524121481495",
  appId: "1:524121481495:web:09c4eddd6af2e43e81d752"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios que planeas usar
export const db = getFirestore(app); // Base de datos Firestore
export const auth = getAuth(app); // Autenticación
export default app;
