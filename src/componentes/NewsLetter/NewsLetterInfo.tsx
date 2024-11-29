// import rose from '../../beConnection_Assets/home-imagnees/2-quien-detras.jpg'
import rose from '../../beConnection_Assets/beInfo/rose.jpg'
import { Button } from '../shared/Button'

export const NewsLetterInfo = () => {
  return (
    <>
<article className='flex flex-col-reverse bg-red-200  '>
    <div className='lg:w-[60%] lg:py-10 lg:px-12 bg-lime-200'>

          <h1 className='text-3xl md:text-6xl text-center'>BE NEWS!</h1>
          <h2 className='text-2xl md:text-4xl md:py-6 text-purple1 text-center'>NO TE PIERDAS EL MEJOR NEWSLETTER!</h2>
          <p className='text-lg md:text-lg montserrat text-center'>
          Con invitaciones, novedades de marcas amigas y la posibilidad de acceder a descuentos u obsequios especiales para nuestra comunidad.
          </p>
          <p className='text-lg md:text-lg montserrat my-4 text-center'>Como ya saben, desde Be Connections organizo desayunos, encuentros, charlas y experiencias para mujeres. Casi todo esto en Nordelta, donde soy vecina y conozco muy bien. La temática de cada encuentro es una excusa, el objetivo es conectar, hacer sinergias, networking y amigas.</p>
          <p className='text-lg md:text-lg montserrat text-center'>Cada mes recibirás Be News!, desde donde además de contarte sobre lo que pasa en Be Connections, incluirá novedades y sorpresas como obsequios, sorteos o eventos especiales. Para esto último, necesitaría que me cuentes sobre tus intereses, así de acuerdo a tu perfil, preferencias y estilo de vida podré enviarte invitaciones a eventos especiales, producciones audiovisuales y muchas acciones divertidas que estamos planeando.</p>
          <p  className='text-lg md:text-base montserrat font-semibold text-purple1 mt-8 text-center'>Sumate a la Comunidad para estar al tanto de las novedades y tener prioridad para inscribirte a los encuentros, workshops y experiencias. </p>
        <Button text='SUBSCRIBIR' className='p-4 mt-10 lg:text-xl lg:w-[250px] '  />
    </div>
    <div className='  lg:w-[40%] bg-sky-200'>
        <img src={rose} alt="rose" className='max-w-[250px] px-6 py-5 lg:py-32 object-left mx-auto h-full object-contain rounded-t-[40%]'/>
    </div>
      
        </article>
    </>
  )
}
