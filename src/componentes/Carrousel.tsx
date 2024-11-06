import mujeresDesayuno from '../beConnection_Assets/Carrousel/13.jpg';

import mujeresEspalda from '../beConnection_Assets/Carrousel/10.jpg';

import ImageGallery from 'react-image-gallery';
import { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import './Carrousel.css';

export const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagenes = [
    {
      original: mujeresDesayuno,
      title: 'Transporte seguro y eficiente',
      subtitle:
        'Tenemos más de 25 años de experiencia. Somos una pyme, y nuestra flota cuenta con chasis y semis tipo saider. Llevamos volumen y poco peso. Contamos con chasis de 5 y 10 mil kilos y semis de 15 y 22 mil kilos.'
    },
    {
      original: mujeresEspalda,
      title: 'Calidad y seguridad en cada transporte',
      subtitle:
        'Nuestro equipo está comprometido con ofrecer un servicio seguro y confiable. Nos especializamos en transporte de carga ligera y volumétrica.'
    }
  ];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };
const desc = {desc1: "hola", desc2: "chau"}
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute z-10 text-center p-4">
        <h1
          className="text-3xl lg:text-6xl font-bold leading-snug"
          style={{ textShadow: '1px 1px 30px black' }}
        >
          {imagenes[currentIndex].title}
        </h1>
        <p className="mt-4 text-sm lg:text-lg">{imagenes[currentIndex].description}</p>
      </div>


      <ImageGallery
        items={imagenes}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        showNav={false}
        showBullets={true}
        autoPlay={true}
        additionalClass="custom-gallery"
        onSlide={handleSlideChange}
        description={imagenes.descripcion}
      />
    </section>
  );
};
