import { useState } from 'react';
import Navbar from '../Componentes/Navbar/Navbar'

const AgendarCita = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    date: '',
    specialty: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado', formData);
    // Aquí podrías agregar la lógica para enviar el formulario
  };

  return (
    <>
      <Navbar/>
      <div className="max-w-md mx-auto border-2 border-blue-500 bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Agendar una Cita Médica</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-gray-700">
            Nombre completo
          </label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} autoFocus={true} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">
            Correo electrónico
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>

        <div>
          <label htmlFor="date" className="block text-gray-700">
            Fecha de la cita
          </label>
          <input type="datetime-local" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>

        <div>
          <label htmlFor="specialty" className="block text-gray-700">
            Especialidad médica
          </label>
          <select id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            <option value="">Selecciona una especialidad</option>
            <option value="cardiologia">Cardiología</option>
            <option value="dermatologia">Dermatología</option>
            <option value="neurologia">Neurología</option>
            <option value="pediatria">Pediatría</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments" className="block text-gray-700">
            Comentarios adicionales (opcional)
          </label>
          <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
          Agendar Cita
        </button>
      </form>
    </div>
    </>
  )
}

export default AgendarCita