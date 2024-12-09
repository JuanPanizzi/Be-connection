import club from '../../beConnection_Assets/club-be-imagenes/1-clube-be.png'
import { Button } from '../shared/Button'

export const ClubBeInfo = () => {
  return (
    <article className="p-4  lg:p-12">
      <section className="  grid grid-cols-1 lg:grid-cols-3 lg:gap-6  lg:gap-8">
        {/* Imagen */}
        <div className=" flex mx-auto justify-center items-center   p-4 rounded-lg col-span-1">
          <img
            src={club}
            alt="beConnections"
            className="w-full max-w-xs lg:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto object-contain rounded-t-[40%]"
          />
        </div>
        
        {/* Contenido */}
        <div className="flex flex-col justify-center text-center lg:text-right py-8 lg:py-16 col-span-2">
          {/* Título y descripción */}
          <div>
            <h1 className="text-3xl lg:text-4xl lg:text-6xl   mb-4">CLUB BE!</h1>
            <h2 className="text-lg  lg:text-3xl text-purple1 mb-6">
              PODÉS ESTAR AL TANTO DE LAS NOVEDADES
            </h2>
            <p className="text-gray-700 text-base lg:text-lg xl:text-xl  leading-relaxed montserrat lg:pl-16">
              Si bien podés participar en cualquiera de nuestros encuentros y actividades, te invitamos a ser parte de{" "}
              <b className="text-purple1 font-bold">Club Be!</b>: sumate para estar al tanto de las novedades y tener prioridad para inscribirte a cada encuentro, workshop o experiencia. <br />
              Además como socia, vas a recibir promociones, obsequios y descuentos exclusivos para nuestra comunidad. También invitaciones a eventos y acciones solo para socias.
            </p>
          </div>
          
          {/* Perfil y detalles */}
          <div className="mt-8">
            <h2 className="text-lg  lg:text-3xl text-purple1 mb-6">
              ¿CUÁL ES EL PERFIL DE LAS MUJERES BE?
            </h2>
            <p className="text-gray-700 text-base lg:text-lg xl:text-xl  leading-relaxed montserrat lg:pl-16">
              Principalmente vecinas de Nordelta y Barrios de Nuevo Delta (ABC1). También se suman de otras ciudades, quienes tienen lazos personales/comerciales con nuestra zona (principalmente de Recoleta, San Isidro y barrios centrados de diversos puntos de Buenos Aires). Todos tenemos en común el ser mujeres con un estilo de vida que cuida y valora los detalles y aman sentirse bellas y empoderadas.
            </p>
          </div>

          {/* Botón */}
          <div className="mt-10 flex justify-center lg:justify-end">
            <Button
              text="MÁS INFO"
              className="min-w-[200px]  lg:min-w-[300px] py-2 lg:py-4 text-base lg:text-xl lg:text-2xl bg-purple1 text-white rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </article>
  );
};

