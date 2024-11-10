import beauty from '../../beConnection_Assets/Recomendaciones-imagenes/1.beauty.png'
import wellness from '../../beConnection_Assets/Recomendaciones-imagenes/2.welness.png'
import moda from '../../beConnection_Assets/Recomendaciones-imagenes/3. moda y accesorios.png'
import personal from '../../beConnection_Assets/Recomendaciones-imagenes/4.imagen-personal.png'
import deco from '../../beConnection_Assets/Recomendaciones-imagenes/5.deco-y-hogar.png'
import negocio from '../../beConnection_Assets/Recomendaciones-imagenes/6.todo-para-tu-negocio.png'
import fiestas from '../../beConnection_Assets/Recomendaciones-imagenes/7.fiestas y celebraciones.png'


export const RecomendacionesInfo = () => {
    const recomendaciones = [
        { id: 1, titulo: "Beauty and Make Up", imagen: beauty },
        { id: 2, titulo: "Wellness", imagen: wellness },
        { id: 3, titulo: "Moda y Accesorios", imagen: moda },
        { id: 4, titulo: "Imagenes Personal", imagen: personal },
        { id: 5, titulo: "Deco y Hogar", imagen: deco} ,
        { id: 6, titulo: "Todo para tu negocio", imagen: negocio },
        { id: 7, titulo: "Fiestas y Celebraciones", imagen: fiestas },
        { id: 8, titulo: "Holística", imagen: wellness }
      ];
      return (
        <section className='py-6 px-4 md:px-20'>
          <h1 className='text-3xl md:text-6xl'>RECOMENDACIONES BE!</h1>
          <h2 className='text-2xl md:text-4xl md:py-6 text-purple1'>BASADOS EN NUESTRAS EXPERIENCIAS</h2>
          <p className='text-lg md:text-xl'>
            *Todos ellos formaron parte acompañando o participando en acciones o eventos junto a Be.
            <br /> Vale la pena conocerlos!
          </p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-6 '>
            {recomendaciones.map((recomendacion) => (
              <div
                key={recomendacion.id}
                className="relative h-40 md:h-56 bg-cover bg-center hover:bg-purple1 rounded-lg shadow-lg "
                style={{ backgroundImage: `url(${recomendacion.imagen})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <h3 className="text-white md:text-4xl md:w-1/2 text-center ">{recomendacion.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}
