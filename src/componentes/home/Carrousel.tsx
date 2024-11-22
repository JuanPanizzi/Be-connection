import c1 from '../../beConnection_Assets/Carrousel/13.jpg';
import c2 from '../../beConnection_Assets/Carrousel/10.jpg';
import c3 from '../../beConnection_Assets/Carrousel/5.jpg'
import c4 from '../../beConnection_Assets/Carrousel/4.jpg'
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import './Carrousel.css';
import { Button } from '../shared/Button';

export const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagenes = [
    {
      original: c1,
      title: 'DESCUBRÍ LA MAGIA DE NUESTROS DESAYUNOS Y ENCUENTROS',
    },
    {
      original: c2,
      title: 'CONÉCTATE INSPIRATE Y CRECE JUNTO A MUJERES EXTRAORDINARIAS',
    },
    {
      original: c3,
      title: 'ÚNETE AL CLUB DE MUJERES DE NORDELTA Y POTENCIA TU CAMINO',
    },
    {
      original: c4,
      title: 'DA A CONOCER TU MARCA EN NORDELTA',
    }
  ];

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  return (
      <section className="relative w-full h-screen flex  justify-center bg-black text-white">
        <div className="absolute z-10 text-center lg:p-4 lg:py-32">
          <h1
            className="text-3xl lg:text-[4.2rem] leading-relaxed text-white viaoda "
            style={{
              textShadow: '2px 2px 4px black',
              lineHeight: 1.3
            }}
          >
            {imagenes[currentIndex].title}
          </h1>

        <button className=' max-w-[300px] text-white rounded  border-[3px] border-white p-3 w-72 sm:text-2xl mt-12   '
        style={{ boxShadow: '2px 2px 10px black'}} >SUMATE</button>
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
          slideDuration={1000}
          slideInterval={3000}
        />
      </section>
  );
};
