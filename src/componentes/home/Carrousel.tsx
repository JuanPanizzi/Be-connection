import c1 from '../../beConnection_Assets/Carrousel/13.jpg';
import c2 from '../../beConnection_Assets/Carrousel/10.jpg';
import c3 from '../../beConnection_Assets/Carrousel/5.jpg'
import c4 from '../../beConnection_Assets/Carrousel/4.png'
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import './Carrousel.css';
import { HashLink } from 'react-router-hash-link';

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
    <section className="relative w-full flex   justify-center bg-black text-white">
      <div className=" absolute top-10 min-[380px]:top-20  min-[500px]:top-28 sm:top-44 md:top-52 z-10 text-center p-4 lg:p-4 ">
        <h1
          className="text-2xl min-[500px]:text-xl sm:text-2xl md:text-3xl lg:text-[4.2rem] leading-relaxed text-white viaoda "
          style={{
            textShadow: '2px 2px 4px black',
            lineHeight: 1.3
          }}
        >
          {imagenes[currentIndex].title}
        </h1>

        {/* <button className=' lg:max-w-[300px] text-white rounded border-[1.5px] lg:border-[3px] border-white w-20 sm:w-28 p-1 mt-3 lg:p-3 lg:w-72 text-[0.7rem] min-[500px]:text-[0.7rem] sm:text-[0.8rem] lg:text-xl lg:mt-12   '
          style={{ boxShadow: '2px 2px 10px black' }} > */}
            {/* <a href="#footer">
            SUMATE
            </a> */}
            {/* </button> */}
          <HashLink smooth to="/#footer" className='carrousel-button inline-block lg:max-w-[300px] text-white rounded border-[1.5px] lg:border-[3px] border-white w-20 sm:w-28 p-1 mt-3 lg:p-3 lg:w-72 text-[0.7rem] min-[500px]:text-[0.7rem] sm:text-[0.8rem] lg:text-xl lg:mt-12   '
          style={{ boxShadow: '2px 2px 10px black' }} >SOBRE BE!</HashLink>

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
