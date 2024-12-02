// import rose from '../../beConnection_Assets/home-imagnees/2-quien-detras.jpg'
import rose from '../../beConnection_Assets/beInfo/rose.jpg'
import { Button } from '../shared/Button'

export const NewsLetterInfo = () => {
  return (
    <>
<article className='flex flex-col-reverse'>
    <div className='lg:w-[60%] px-1 lg:py-10 lg:px-12 '>

          <h1 className='text-2xl sm:text-3xl lg:text-6xl text-center'>BE NEWS!</h1>
          <h2 className='text-xl sm:text-2xl lg:text-4xl md:py-6 text-purple1 text-center'>NO TE PIERDAS EL MEJOR NEWSLETTER!</h2>
          <p className='text-base md:text-lg montserrat text-center'>
          Con invitaciones, novedades de marcas amigas y la posibilidad de acceder a descuentos u obsequios especiales para nuestra comunidad.
          </p>
          <p className='text-base md:text-lg montserrat my-4 text-center'>Como ya saben, desde Be Connections organizo desayunos, encuentros, charlas y experiencias para mujeres. Casi todo esto en Nordelta, donde soy vecina y conozco muy bien. La temática de cada encuentro es una excusa, el objetivo es conectar, hacer sinergias, networking y amigas.</p>
          <p className='text-base md:text-lg montserrat text-center'>Cada mes recibirás Be News!, desde donde además de contarte sobre lo que pasa en Be Connections, incluirá novedades y sorpresas como obsequios, sorteos o eventos especiales. Para esto último, necesitaría que me cuentes sobre tus intereses, así de acuerdo a tu perfil, preferencias y estilo de vida podré enviarte invitaciones a eventos especiales, producciones audiovisuales y muchas acciones divertidas que estamos planeando.</p>
          <p  className='text-base md:text-base montserrat font-semibold text-purple1 mt-8 text-center'>Sumate a la Comunidad para estar al tanto de las novedades y tener prioridad para inscribirte a los encuentros, workshops y experiencias. </p>
          <div className='flex justify-center  pb-10'>

        <Button text='SUBSCRIBIR' className='p-3 md:p-4 mt-10 text-xs md:text-base lg:text-xl lg:w-[250px]  '  />
          </div>
    </div>
    <div className='  lg:w-[40%] mt-10 sm:mt-0'>
        <img src={rose} alt="rose" className='max-w-[220px] sm:max-w-[250px] lg:max-w-[400px] px-6 py-5 lg:py-32 object-left mx-auto h-full object-contain rounded-t-[40%]'/>
    </div>
      
        </article>
    </>
  )
}
