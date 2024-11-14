// import rose from '../../beConnection_Assets/home-imagnees/2-quien-detras.jpg'
import rose from '../../beConnection_Assets/club-be-imagenes/1-clube-be.png'
import { Button } from '../shared/Button'

export const ClubBeInfo = () => {
  return (
    <>
<article className='flex '>
<div className=' w-[40%]'>
        <img src={rose} alt="rose" className='px-6 py-32 object-left mx-auto h-full object-contain rounded-t-[40%]'/>
    </div>
    <div className="w-[60%]  flex flex-col justify-center py-16  text-right lg:p-16 col-span-2">
          <div>

            <h1 className="text-2xl mb-2 lg:text-6xl">CLUB BE!</h1>
            <h2 className="text-xl text-purple1 lg:text-3xl my-6">PODÉS ESTAR AL TANTO DE LAS NOVEDADES</h2>
            <p className="text-gray-700 text-lg montserrat">
              Si bien podés participar en cualquiera de nuestros encuentros y actividades, te invitamos a ser parte de <b className='text-purple1 font-bold'>Club Be!</b>: sumate para estar al tanto de las novedades y tener prioridad para inscribirte a cada encuentro, workshop o experiencia. <br />
              Además como socia, vas a recibir promociones, obsequios y descuentos exclusivos para nuestra comunidad. También invitaciones a eventos y acciones solo para socias.
            </p>
            </div>
            <div>
            <h2 className="text-xl text-purple1 lg:text-3xl my-6">¿CUÁL ES EL PERFIL DE LAS MUJERES BE? </h2>
            <p className="text-gray-700 text-lg montserrat">
              Principalmente vecinas de Nordelta y Barrios de Nuevo Delta (ABC1). También se suman de otras ciudades, quienes tienen lazos personales/comerciales con nuestra zona (principalmente de Recoleta, San Isidro y barrios centrados de diversos puntos de Buenos Aires). Todos tenemos en común el ser mujeres con un estilo de vida que cuida y valora los detalles y aman sentirse bellas y empoderadas.
            </p>
            </div>

              <Button text="SUMATE" className='ml-auto min-w-[300px]  py-4 text-2xl mt-10 mr-4' />
        </div>
   
      
        </article>
    </>
  )
}
