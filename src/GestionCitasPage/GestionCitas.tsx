import React, { useEffect, useState } from 'react';
import Navbar from '../Share/Componentes/Navbar/Navbar';
import CitasMedicasServicios from '../Services/CitasMedicasServicios';

// Definimos el tipo de las citas
interface Cita {
  id: string;
  Nombre_Cliente: string;
  Fecha_Cita: string; // El campo ahora es un string
  Especialidad_Medica: string;
  Correo: string;
  Comentario: string;
}

const GestionCitas = () => {
  const [data, setData] = useState<Cita[]>([]);

  // Función para obtener todas las citas de Firebase usando CitasMedicasServicios
  const fetchData = async () => {
    try {
      const querySnapshot = await CitasMedicasServicios.getAll();
      const fetchedData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // Verificamos si Fecha_Cita es un Timestamp, si lo es, lo convertimos, si no, lo usamos como está
          Fecha_Cita: data.Fecha_Cita?.seconds
            ? new Date(data.Fecha_Cita.seconds * 1000).toLocaleString()
            : data.Fecha_Cita || '', // Si es un string, lo usamos directamente
        };
      }) as Cita[];
      setData(fetchedData); // No habrá error de tipo ahora
    } catch (error) {
      console.error('Error al obtener las citas médicas:', error);
    }
  };

  // useEffect para cargar los datos al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Función para eliminar una cita
  const handleDelete = async (id: string) => {
    try {
      await CitasMedicasServicios.delete(id); // Llamamos a la función de eliminación desde el servicio
      setData(data.filter((cita) => cita.id !== id)); // Actualizamos el estado eliminando la cita localmente
    } catch (error) {
      console.error('Error al eliminar la cita médica:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-4">Citas Médicas</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Paciente</th>
                <th className="py-3 px-6 text-left">Fecha Y Hora</th>
                <th className="py-3 px-6 text-left">Especialidad Medica</th>
                <th className="py-3 px-6 text-left">Accion</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data.map((cita) => (
                <tr key={cita.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{cita.Nombre_Cliente}</td>
                  <td className="py-3 px-6 text-left">{cita.Fecha_Cita}</td>
                  <td className="py-3 px-6 text-left">{cita.Especialidad_Medica}</td>
                  <td className="py-3 px-6 text-left">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                      onClick={() => handleDelete(cita.id)}
                    >
                      Cancelar Cita
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GestionCitas;
