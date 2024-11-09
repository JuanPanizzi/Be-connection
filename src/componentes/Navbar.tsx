import { useState, useEffect } from 'react';
import logo from '../beConnection_Assets/logo-be-connection.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Cambia el estado `scrolled` cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 p-4 transition-colors duration-300 ${scrolled ? 'bg-white/60 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-full w-10 mr-2" />
          <span className={`font-bold text-lg ${scrolled ? 'text-black' : 'text-white'}`}>Mi Página</span>
        </div>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className={`hover:text-gray-400 ${scrolled ? 'text-black' : 'text-white'}`}>Inicio</a>
          <a href="#about" className={`hover:text-gray-400 ${scrolled ? 'text-black' : 'text-white'}`}>Nosotros</a>
          <a href="#services" className={`hover:text-gray-400 ${scrolled ? 'text-black' : 'text-white'}`}>Servicios</a>
          <a href="#contact" className={`hover:text-gray-400 ${scrolled ? 'text-black' : 'text-white'}`}>Contacto</a>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none ${scrolled ? 'text-black' : 'text-white'}`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas alineado a la derecha */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-end pr-4 mt-2 bg-white/90 backdrop-blur-sm">
          <a href="#home" className="block px-4 py-2 text-blue-800 hover:bg-blue-700">Inicio</a>
          <a href="#about" className="block px-4 py-2 text-blue-800 hover:bg-blue-700">Nosotros</a>
          <a href="#services" className="block px-4 py-2 text-blue-800 hover:bg-blue-700">Servicios</a>
          <a href="#contact" className="block px-4 py-2 text-blue-800 hover:bg-blue-700">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
