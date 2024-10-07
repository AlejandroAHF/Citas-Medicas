import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Importa Firestore

/*firebase.firestore(): Esto te da acceso a la base de datos Firestore.
collection("/CitasMedicas"): Obtienes una referencia a la colección CitasMedicas.*/
const db = firebase.firestore().collection("/CitasMedicas");

class CitasMedicasServicios {
  getAll() {
    return db.get(); // Devuelve todas las citas
  }

  create(CitasMedicas: any) {
    return db.add(CitasMedicas); // Agrega una nueva cita
  }

  update(id: string, value: any) {
    return db.doc(id).update(value); // Actualiza una cita por ID
  }

  delete(id: string) {
    return db.doc(id).delete(); // Elimina una cita por ID
  }
}

export default new CitasMedicasServicios(); // Instancia de la clase para exportar