import asesoramiento from '../../../beConnection_Assets/Imagen-personal-imagenes/1.png'
import cabello from '../../../beConnection_Assets/Imagen-personal-imagenes/2.png'
import peinados from '../../../beConnection_Assets/Imagen-personal-imagenes/3.png'
import makeUp from '../../../beConnection_Assets/Imagen-personal-imagenes/4.png'
import asesoramiento2 from '../../../beConnection_Assets/Imagen-personal-imagenes/5.png'
import asesoramiento3 from '../../../beConnection_Assets/Imagen-personal-imagenes/6.png'
import coaching from '../../../beConnection_Assets/Imagen-personal-imagenes/7.png'
import asesoramiento4 from '../../../beConnection_Assets/Imagen-personal-imagenes/8.png'
import actitud from '../../../beConnection_Assets/Imagen-personal-imagenes/9.png'
import asesoria from '../../../beConnection_Assets/Imagen-personal-imagenes/10.png'
import makeUp2 from '../../../beConnection_Assets/Imagen-personal-imagenes/11.png'
import coaching2 from '../../../beConnection_Assets/Imagen-personal-imagenes/12.png'


import { CardServicios } from './CardServicios'

export const Servicios = () => {

    const servicios = [
        { imagen: asesoramiento, titulo: 'ASESORAMIENTO DE IMAGEN', p1: 'con María Pinola y Nati Pierri', ig1: '@grupoimagenmariapinola', ig2: '@nataliapierricentrodeimagen', p2: 'Asesoras de imagen. Cursos y mentorías', contacto: '+5411-4426-8008 / +54911 4429-2967' },
        { imagen: cabello, titulo: 'CABELLO Y BELLEZA', p1: 'Cabello y servicios manos/pies/tratamientos', ig1: '@status.nordelta', ig2: '', p2: 'Visitalos por asesoramiento de servicios de color, corte, peinados', contacto: '+5411 6164-2406' },
        { imagen: peinados, titulo: 'PEINADOS Y MAKE UP', p1: 'Cursos/asesoramiento auto-peinado y Make up con Gigo', ig1: '@bygigo', ig2: '', p2: 'Aprendé a maquillarte y peinarte según tu estilo', contacto: '+5411 5470-3050' },
        { imagen: makeUp, titulo: 'MAKE UP', p1: 'Auto-maquillaje y cursos de perfeccionamiento. Natalia U.', ig1: '@nataliaumakeup', ig2: '', p2: 'Asesoramiento personalizado o cursos grupales', contacto: '+5411 5954-9925' },
        { imagen: asesoramiento2, titulo: 'ASESORAMIENTO DE IMAGEN', p1: 'Con Any Casas', ig1: '@anuchicasas', ig2: '', p2: 'Asesoramiento personalizado. Personal shopper', contacto: '+5411 5164-2506' },
        { imagen: asesoramiento3, titulo: 'ASESORAMIENTO DE IMAGEN', p1: 'Con Flor Toro', ig1: '@fashiondebility', ig2: '', p2: 'Asesoramiento, cursos y personal shopper.', contacto: '+5411 4044-1307' },
        { imagen: coaching, titulo: 'COACHING IMAGEN INTERIOR', p1: 'Con Magalí Sigal', ig1: '@magali_sigal', ig2: '', p2: 'Coach transgeneracional y consteladora familiar.', italic: '"Quien mira hacia afuera sueña, quien mira hacia adentro despierta"', contacto: 'magalisigal@gmail.com' },
        { imagen: asesoramiento4, titulo: 'ASESORAMIENTO DE IMAGEN', p1: 'Con Ana Cristiani', ig1: '@anacristiani_fashion', ig2: '', p2: 'Coach de imagen integral y personal shopper.', contacto: '+5411 6420-1163' },
        { imagen: actitud, titulo: 'TALLER DE ACTITUD', p1: 'Con Sol Villarreal', ig1: '@solvillarrealok', ig2: '', p2: 'Taller bases del modelaje para tu vida: incluye actitud - seguridad - imagen personal y redes (cómo posar).', contacto: '@solvillarrealok' },
        { imagen: asesoria, titulo: 'ASESORIA INTEGRAL Y OUTFITS', p1: 'Con Valeria Parodi', ig1: '', ig2: '', p2: 'Ofrece cursos y mentorías además de su propia marca de ropa.', contacto: '@valeriaparodi.style / @val.parodi' },
        { imagen: makeUp2, titulo: 'MAKE-UP', p1: 'Con Alexia', ig1: '@alexiajaet', ig2: '', p2: 'Asesoramiento y workshops.', contacto: '@alexiajaet' },
        { imagen: coaching2, titulo: 'COACHING INDIVIDUAL', p1: 'Con Andrea Tellechea', ig1: '@andreatellecheacoach', ig2: '', p2: 'Andrea es Lic. en Administración - Coach ontológico profesional - Especialista en PNL.', contacto: 'andreatelcoach@gmail.com' },


    ]

    return (
        <section className="xl:max-w-[2000px] mx-auto    mt-16">
           
            <div className="grid sm:grid-cols-2 md:grid-cols-3 md:flex-row    gap-4 px-6">
                {
                    servicios.map(({ imagen, titulo, p1, p2, ig1, ig2, italic , contacto }, index) => (

                        <CardServicios 
                        imagen={imagen} 
                        titulo={titulo} 
                        p1={p1} 
                        p2={p2} 
                        ig1={ig1} 
                        ig2={ig2} 
                        italic={italic}
                        contacto={contacto} 
                        key={index} />
                    ))
                }

            </div>
        </section>
    )
}
