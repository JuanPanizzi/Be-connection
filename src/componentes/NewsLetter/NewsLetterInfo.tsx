// import rose from '../../beConnection_Assets/home-imagnees/2-quien-detras.jpg'
import rose from '../../beConnection_Assets/beInfo/rose.jpg'
import { Button } from '../shared/Button'

export const NewsLetterInfo = () => {
  return (
    <>
<article className='flex flex-col-reverse lg:flex-row lg:pt-10'>
    <div className='lg:w-[60%] px-1 sm:px-5 lg:py-10 lg:px-12  md:w-4/5 md:mx-auto '>

          <h1 className='text-2xl sm:text-3xl lg:text-6xl text-center lg:text-left'>BE NEWS!</h1>
          <h2 className='text-xl sm:text-2xl lg:text-4xl md:py-6 text-purple1 text-center lg:text-left'>NO TE PIERDAS EL MEJOR NEWSLETTER!</h2>
          <p className='text-base md:text-base montserrat text-center lg:text-left'>
          Con invitaciones, novedades de marcas amigas y la posibilidad de acceder a descuentos u obsequios especiales para nuestra comunidad.
          </p>
          <p className='text-base md:text-base montserrat my-4 text-center lg:text-left'>Como ya saben, desde Be Connections organizo desayunos, encuentros, charlas y experiencias para mujeres. Casi todo esto en Nordelta, donde soy vecina y conozco muy bien. La temática de cada encuentro es una excusa, el objetivo es conectar, hacer sinergias, networking y amigas.</p>
          <p className='text-base md:text-base montserrat text-center lg:text-left'>Cada mes recibirás Be News!, desde donde además de contarte sobre lo que pasa en Be Connections, incluirá novedades y sorpresas como obsequios, sorteos o eventos especiales. Para esto último, necesitaría que me cuentes sobre tus intereses, así de acuerdo a tu perfil, preferencias y estilo de vida podré enviarte invitaciones a eventos especiales, producciones audiovisuales y muchas acciones divertidas que estamos planeando.</p>
          <p  className='text-base md:text-base montserrat font-semibold text-purple1 mt-8 lg:mt-4 text-center lg:text-left'>Sumate a la Comunidad para estar al tanto de las novedades y tener prioridad para inscribirte a los encuentros, workshops y experiencias. </p>
          <div className='flex justify-center  pb-10 lg:justify-start'>

        <Button text='SUBSCRIBIR' className='p-3 md:p-4 mt-10 text-xs md:text-base lg:text-xl lg:w-[250px]  '  />
          </div>
    </div>
    <div className='  lg:w-[40%] mt-7 lg:mt-0 md:mt-4 py-3 '>
        <img src={rose} alt="rose" className='max-w-[190px] md:max-w-[250px] lg:max-w-[450px]  lg:px-0  lg:py-0 object-left mx-auto  object-contain lg:object-fill rounded  rounded-t-[40%] lg:rounded-t-[40%] lg:mt-10 bg-lime-200' />
    </div>
      
        </article>
    </>
  )
}
