import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Inicio from './Paginas/Inicio'
import GestionCitas from './Paginas/GestionCitas'
import AgendarCita from './Paginas/AgendarCita'

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
