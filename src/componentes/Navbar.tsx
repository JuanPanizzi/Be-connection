import { useState, useEffect } from 'react';
import logo from '../beConnection_Assets/logo-be-connection.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
    <nav className={`fixed top-0 w-full z-50   transition-colors duration-300 bg-black ${scrolled ? 'bg-opacity-50' : ' bg-opacity-25'}`}>
      <div className="container mx-auto flex h-full justify-between items-center ">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-full max-w-8 sm:max-w-16 mr-2" />

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex md:space-x-5 lg:space-x-8 lg:pr-16 ">
          <Link to="/" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>INICIO</Link>
          <HashLink smooth to="/#be-info" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>SOBRE BE!</HashLink>
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
        <div className={`md:hidden flex flex-col items-end pr-4 mt-2  bg-black ${scrolled ? 'bg-opacity-0' : ' bg-opacity-0'}`}>
          <Link to="/" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}  onClick={() => setIsOpen(!isOpen)}>INICIO</Link>
          <HashLink smooth to="/#be-info" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}  onClick={() => setIsOpen(!isOpen)}>SOBRE BE!</HashLink>
          <Link to="/recomendaciones" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}  onClick={() => setIsOpen(!isOpen)}>RECOMENDADOS BE!</Link>
          <Link to="/newsletter" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}  onClick={() => setIsOpen(!isOpen)}>NEWSLETTER</Link>
          <Link to="/club" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}  onClick={() => setIsOpen(!isOpen)}>CLUB BE!</Link>
          <Link to="/contacto" className={`lg:text-lg hover:text-purple1 transition-colors ${scrolled ? 'text-white' : 'text-white'}`}  onClick={() => setIsOpen(!isOpen)}>CONTACTO</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
