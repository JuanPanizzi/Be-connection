import { useState, useEffect } from 'react';
import logo from '../beConnection_Assets/logo-be-connection.png';
import { Link } from 'react-router-dom';

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
    <nav className={`fixed top-0 w-full z-50  transition-colors duration-300 bg-black ${scrolled ? 'bg-opacity-75' : ' bg-opacity-60'}`}>
      <div className="container mx-auto flex h-full justify-between items-center">
        {/* Logo */}
          <img src={logo} alt="Logo" className="h-full max-w-8 sm:max-w-16 mr-2" />

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-8 pr-16">
          <Link to="#home" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>INICIO</Link>
          <Link to="#about" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>SOBRE BE!</Link>
          <Link to="/recomendaciones" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>RECOMENDADOS BE!</Link>
          <Link to="/newsletter" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>NEWSLETTER</Link>
          <Link to="/club" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>CLUB BE!</Link>
          <Link to="/contacto" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>CONTACTO</Link>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none ${scrolled ? 'text-white' : 'text-white'}`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke={`white`}
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
        <div className={`sm:hidden flex flex-col items-end pr-4 mt-2  bg-black ${scrolled ? 'bg-opacity-0' : ' bg-opacity-0'}`}>
          <a href="#home" className="block px-4 py-2 text-white hover:bg-purple1" style={{
              textShadow: '2px 2px 2px black'
          }}>INICIO</a>
          <a href="#about" className="block px-4 py-2 text-white hover:bg-purple1" style={{
              textShadow: '2px 2px 2px black'
          }} >NOSOTROS</a>
          <a href="#services" className="block px-4 py-2 text-white hover:bg-purple1"  style={{
              textShadow: '2px 2px 2px black'
          }}>SERVICIOS</a>
          <a href="#contact" className="block px-4 py-2 text-white hover:bg-purple1"  style={{
              textShadow: '2px 2px 2px black'
          }}>CONTACTO</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
