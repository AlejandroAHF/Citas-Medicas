import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <nav className="relative flex w-full items-center justify-between bg-white py-4 shadow-md lg:flex-wrap lg:justify-start">
        <div className="flex w-full items-center justify-between px-4">
          
          {/* Botón de menú para móvil */}
          <button className="block lg:hidden border-0 bg-transparent px-2 text-gray-700 hover:text-gray-900 focus:outline-none" type="button" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"/>
            </svg>
          </button>
  
          {/* Links y búsqueda - siempre visibles en pantallas grandes */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex flex-grow items-center justify-between transition-all duration-300 ease-in-out`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/gestion" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                  Gestionar Citas
                </Link>
              </li>
              <li>
                <Link to="/agendar" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                  Agendar Cita
                </Link>
              </li>
            </ul>
  
            {/* Barra de búsqueda */}
            <div className="relative mt-4 lg:mt-0">
              <input type="search" className="rounded-full border border-gray-300 bg-gray-100 text-gray-800 px-4 py-2 focus:outline-none focus:border-blue-500 w-64" placeholder="Buscar" aria-label="Buscar"/>
              <button className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none" type="button">
                Buscar
              </button>
            </div>
          </div>
  
          {/* Logo centrado en pantallas grandes y a la derecha en móviles */}
          <div className="ml-auto lg:ml-0">
            <img src="https://res.cloudinary.com/dksv7n9bg/image/upload/v1728249548/nmrcyb4kzih9s0m1k6ny.png" alt="Logo de Salud" className="h-10 w-10"/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar