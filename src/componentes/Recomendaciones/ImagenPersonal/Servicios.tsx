import asesoramiento from '../../../beConnection_Assets/Imagen-personal-imagenes/1.png'
import cabello from '../../../beConnection_Assets/Imagen-personal-imagenes/2.png'
import peinados from '../../../beConnection_Assets/Imagen-personal-imagenes/3.png'
import makeUp from '../../../beConnection_Assets/Imagen-personal-imagenes/4.png'
import asesoramiento2 from '../../../beConnection_Assets/Imagen-personal-imagenes/5.png'
import asesoramiento3 from '../../../beConnection_Assets/Imagen-personal-imagenes/6.png'
import { CardServicios } from './CardServicios'

export const Servicios = () => {

    const servicios = [
        { imagen: asesoramiento, titulo: 'ASESORAMIENTO DE IMAGEN', p1: 'con María Pinola y Nati Pierri', ig1: '@grupoimagenmariapinola', ig2: '@nataliapierricentrodeimagen', p2: 'Asesoras de imagen. Cursos y mentorías', tel: '+5411-4426-8008 / +54911 4429-2967' }
    ]

    return (
        <section className="mt-16">
            {/* <div className="text-center pb-10 ">
        <h2 className="text-2xl lg:text-6xl font-thin sm:text-4xl">CONOCÉ MÁS SOBRE BE!</h2>
      </div> */}
            <div className="grid md:grid-cols-3 md:flex-row  gap-4 px-6">


                {
                    servicios.map(({ imagen, titulo, p1, p2, ig1, ig2, tel }, index) => (

                        <CardServicios 
                        imagen={imagen} 
                        titulo={titulo} 
                        p1={p1} 
                        p2={p2} 
                        ig1={ig1} 
                        ig2={ig2} 
                        tel={tel} 
                        key={index} />
                    ))
                }

                {/* Tarjeta 1 */}

                {/* <div className="col-span-1   p-4  text-center">
                    <img
                        src={asesoramiento}
                        alt="Imagen 1"
                        className="w-full h-auto mb-4 rounded border-4 border-rosa1 min-[590px]:max-w-[490px] min-[590px]:mx-auto"
                    />
                    <div className='text-center lg:px-4'>

                        <h3 className="sm:text-sm  lg:text-2xl md:text-justify lg:text-center  lora text-purple1  lg:px-1 ">ASESORAMIENTO DE IMAGEN </h3>
                        <p className="">Con María Pinola y Nati Pierri</p>
                        <p>@grupoimagenmariapinola</p>
                        <p>@nataliapierricentrodeimagen</p>
                        <p>Asesoras de imagen. Cursos y mentorías.</p>

                        <p>+5411-4426-8008 / +54911-4429-2967</p>

                    </div>
                </div> */}



            </div>
        </section>
    )
}
