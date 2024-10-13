import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Inicio from './InicioPage/Inicio'
import GestionCitas from './GestionCitasPage/GestionCitas'
import AgendarCita from './AgendarCitaPage/AgendarCita'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',//rama principal
      element: <Inicio/>
    },
    {
      path: '/gestion',
      element: <GestionCitas/>
    },
    {
      path: '/agendar',
      element: <AgendarCita/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
