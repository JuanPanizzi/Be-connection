import { Link } from 'react-router-dom'
import beauty from '../../beConnection_Assets/Recomendaciones-imagenes/1.beauty.png'
import wellness from '../../beConnection_Assets/Recomendaciones-imagenes/2.welness.png'
import moda from '../../beConnection_Assets/Recomendaciones-imagenes/3. moda y accesorios.png'
import personal from '../../beConnection_Assets/Recomendaciones-imagenes/4.imagen-personal.png'
import deco from '../../beConnection_Assets/Recomendaciones-imagenes/5.deco-y-hogar.png'
import negocio from '../../beConnection_Assets/Recomendaciones-imagenes/6.todo-para-tu-negocio.png'
import fiestas from '../../beConnection_Assets/Recomendaciones-imagenes/7.fiestas y celebraciones.png'
import { useState } from 'react'


export const RecomendacionesInfo = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
    const recomendaciones = [
        { id: 1, titulo: "Beauty and Make Up", imagen: beauty, link: '' },
        { id: 2, titulo: "Wellness", imagen: wellness , link: ''},
        { id: 3, titulo: "Moda y Accesorios", imagen: moda , link: ''},
        { id: 4, titulo: "Imagen Personal", imagen: personal , link: '/personal'},
        { id: 5, titulo: "Deco y Hogar", imagen: deco, link: ''} ,
        { id: 6, titulo: "Todo para tu negocio", imagen: negocio , link: ''},
        { id: 7, titulo: "Fiestas y Celebraciones", imagen: fiestas , link: ''},
        { id: 8, titulo: "Holística", imagen: wellness , link: ''}
      ];
      return (
        <section className='py-6 px-4 md:px-20'>
          <h1 className='text-2xl text-center md:text-3xl lg:text-6xl md:text-left'>RECOMENDACIONES BE!</h1>
          <h2 className='text-center sm:text-2xl  lg:text-4xl md:py-3 lg:py-6 text-purple1 md:text-left'>BASADOS EN NUESTRAS EXPERIENCIAS</h2>
          <p className=' text-xs text-sm md:text-xl text-center md:text-left'>
            *Todos ellos formaron parte acompañando o participando en acciones o eventos junto a Be.
          </p>
          <p className='text-xs text-sm md:text-xl text-center md:text-left'>Vale la pena conocerlos!</p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-6 '>
            {recomendaciones.map((recomendacion) => (
              <Link to={ recomendacion.link ? recomendacion.link : '' } className={`${recomendacion.titulo !== 'Imagen Personal' ? 'hover:cursor-default': 'hover:cursor-pointer'}`} target={`${recomendacion.link ? '_blank' : '' }`}>

              <div
                key={recomendacion.id}
                className="relative h-40 md:h-56 bg-cover bg-center hover:bg-purple1  shadow-lg "
                style={{ backgroundImage: `url(${recomendacion.imagen})` }}
                onMouseEnter={() => setHoveredId(recomendacion.id)}
                onMouseLeave={() => setHoveredId(null)}
                >
                <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50   transition-all duration-300 ${recomendacion.titulo !== 'Imagen Personal' ? 'hover:bg-opacity-100' : 'hover:bg-purple1' } `}>
                  <h3 className="text-white md:text-xl lg:text-4xl md:w-1/2 text-center lg:w-4/5 ">
                  {hoveredId === recomendacion.id && recomendacion.titulo !== 'Imagen Personal'
                    ? 'Próximamente'
                    : recomendacion.titulo}
                  </h3>
                </div>
              </div>
                </Link>
            ))}
          </div>
        </section>
      );
}
