import c1 from '../../beConnection_Assets/Carrousel/13.jpg';
import c2 from '../../beConnection_Assets/Carrousel/10.jpg';
import c3 from '../../beConnection_Assets/Carrousel/5.jpg';
import c4 from '../../beConnection_Assets/Carrousel/4.png';
import rosePrincipal from '../../beConnection_Assets/Carrousel/rosePrincipal.jpeg';
// import rosePrincipal2 from '../../beConnection_Assets/Carrousel/rosePrincipal2.jpeg';

import ImageGallery from 'react-image-gallery';
import { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import './Carrousel.css';
import { HashLink } from 'react-router-hash-link';

export const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagenes = [
    {
      original: rosePrincipal,
      title: '¡BIENVENIDOS A BE CONNECTIONS!'
    },
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
      <div className=" absolute top-9 min-[330px]:top-14  min-[380px]:top-12  min-[500px]:top-28 sm:top-44 md:top-52 lg:top-36 xl:top-[72] 2xl:top-[20rem]  z-10 text-center p-4 lg:p-4 ">
        <h1
          className="text-base min-[330px]:text-lg  min-[380px]:text-2xl min-[500px]:text-xl sm:text-2xl md:text-3xl lg:text-[4.2rem] leading-relaxed text-white viaoda "
          style={{
            textShadow: '2px 2px 4px black',
            lineHeight: 1.3
          }}
        >
          {imagenes[currentIndex].title}
        </h1>


      </div>
       
          <HashLink smooth to="/#footer" className='absolute top-28 min-[330px]:top-36  min-[380px]:top-40  min-[500px]:top-48 sm:top-64 md:top-80 lg:top-[25rem] xl:top-[30rem] 2xl:top-[31rem]  z-10  text-white rounded border-[1.5px] lg:border-[3px] border-white w-20 sm:w-28 p-1 mt-3 lg:p-3 lg:w-72  text-[0.5rem] min-[330px]:text-[0.7rem]  min-[500px]:text-[0.7rem] sm:text-[0.8rem] lg:text-xl text-center lg:mt-12   '
          style={{ boxShadow: '2px 2px 10px black' }} >SUMATE</HashLink>


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
        slideDuration={1500}
        slideInterval={7000}
      />
    </section>
  );
};
