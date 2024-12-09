import conocemas3 from '../../beConnection_Assets/home-imagnees/3-conoce-mas.png'
import conocemas4 from '../../beConnection_Assets/home-imagnees/4-conoce-mas.png'
import conocemas5 from '../../beConnection_Assets/home-imagnees/5-conoce-mas.png'
import { CardConocerMas } from './CardConocerMas'

export const ConocerMás = () => {

  const infoCards = [{
    imagen: conocemas3,  titulo: '¿POR QUÉ UN CLUB DE MUJERES EN NORDELTA?', p1: 'La zona de Nordelta y alrededores tuvo un gran crecimiento en los últimos años. Aún no tiene una identidad definida, pero si tanto los barrios que componen Nordelta, como los barrios vecinos, continuan creciendo y haciendose fuertes como comunidad.', p2: 'Como vecina de Nordelta, conozco muy bien este día a día, los gustos y preferencias en particular de las mujeres. Por eso Be Connections nace para conectar, unir y generar sinergías.'
  },
  {
    imagen: conocemas4,  titulo: '¿ME PUEDO SUMAR SI NO SOY VECINA DE NORDELTA?', p1: 'Si bien la mayoría de nuestras asistentes son vecinas de esta zona, todas son bienvenidas a sumarse.', p2: ''
  },
  {
    imagen: conocemas5,  titulo: '¿QUÉ TIPO DE EVENTOS OFRECEMOS A LAS MUJERES DE NUESTRA COMUNIDAD?', p1: 'Desayunos temáticos relacionados con Make up, Moda, Deco & Lifestyle, Travel, Arte, Wellness, en las mejores locaciones de Nordelta y también en Punta del Este. Además generamos eventos y actividades de Networking que concovocan a emprendedoras y mujeres profesionales de la zona. Cada evento es planeado y llevado a cabo cuidando cada detalle: ambientación, catering, obsequios, logrando que cada experiencia...', p2: '', span: ' Más'
  },
]

  return (
    <>
      <section className="xl:max-w-[2000px] mx-auto lg:px-5  xl:px-20 xl:mx-auto py-20 lg:py-32 ">
        <div className="text-center pb-10 ">
          <h2 className="text-2xl lg:text-6xl font-thin sm:text-4xl xl:text-7xl 2xl:text-7xl">CONOCÉ MÁS SOBRE BE!</h2>
        </div>
        <div className="grid md:grid-cols-3 md:flex-row  gap-4 xl:gap-10 2xl:gap-14   px-6 sm:px-0 xl:px-0 xl:justify-between xl:mt-10">
          {
            infoCards.map(({imagen, titulo, span, p1, p2}, index )=> (
              <CardConocerMas key={index} titulo={titulo} p1={p1} p2={p2} imagen={imagen} span={span} />
            ))
          }
          
        </div>
      </section>

    </>
  )
}
