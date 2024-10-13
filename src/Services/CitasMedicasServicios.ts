// src/services/CitasMedicasServicios.ts
import { db } from "../firebase"; // Importa la instancia de Firestore
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"; // Importa las funciones necesarias

// Referencia a la colección "CitasMedicas" usando la función `collection`
const citasMedicasCollection = collection(db, "CitasMedicas");

class CitasMedicasServicios {
  // Obtiene todas las citas
  getAll() {
    return getDocs(citasMedicasCollection); // Devuelve todas las citas
  }

  // Crea una nueva cita
  create(CitasMedicas: any) {
    return addDoc(citasMedicasCollection, CitasMedicas); // Agrega una nueva cita
  }

  // Elimina una cita por ID
  delete(id: string) {
    const citaDoc = doc(db, "CitasMedicas", id);
    return deleteDoc(citaDoc); // Elimina la cita con el ID
  }
}

export default new CitasMedicasServicios(); // Instancia de la clase para exportar