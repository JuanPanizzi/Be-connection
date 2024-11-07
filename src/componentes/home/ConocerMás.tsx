import conocemas3 from '../../beConnection_Assets/home-imagnees/3-conoce-mas.png'
import conocemas4 from '../../beConnection_Assets/home-imagnees/4-conoce-mas.png'
import conocemas5 from '../../beConnection_Assets/home-imagnees/5-conoce-mas.png'

export const ConocerMás = () => {
  return (
    <>
      <section className="lg:py-32 ">
      <div className="text-center lg:py-10 ">
        <h2 className="lg:text-7xl font-thin ">CONOCÉ MÁS SOBRE BE!</h2>
      </div>
      <div className="grid grid-cols-3 md:flex-row  gap-4 px-6">
        {/* Tarjeta 1 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas3}
            alt="Imagen 1"
            className="w-full h-auto mb-4 rounded border-4 border-rosa1"
          />
          <div className='lg:px-10  text-center'>

          <h3 className="lg:text-2xl lora text-purple1  lg:py-5">¿POR QUÉ UN CLUB DE MUJERES EN NORDELTA?</h3>
          <p className="text-gray-600 montserrat mt-2 lora text-left lg:w-[95%] lg:mx-auto lg:pl-3 lg:py-4">La zona de Nordelta y alrededores tuvo un gran crecimiento en los últimos años. Aún no tiene una identidad definida, pero si tanto los barrios que componen Nordelta, como los barrios vecinos, continuan creciendo y haciendose fuertes como comunidad. 
          <br /> Como vecina de Nordelta, conozco muy bien este día a día, los gustos y preferencias en particular de las mujeres. Por eso Be Connections nace para conectar, unir y generar sinergías. </p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas4}
            alt="Imagen 2"
            className="w-full h-auto mb-4 rounded border-4 border-rosa1"
          />
          <div className='lg:px-10  text-center'>

         <h3 className="lg:text-2xl lora text-purple1  lg:py-5">¿ME PUEDO SUMAR SI NO SOY VECINA DE NORDELTA?</h3>
          <p className="text-gray-600 montserrat mt-2 lora text-left lg:w-[95%] lg:mx-auto lg:pl-3 lg:py-4">Si bien la mayoría de nuestras asistentes son vecinas de esta zona, todas son bienvenidas a sumarse</p>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas5}
            alt="Imagen 3"
            className="w-full h-auto mb-4 rounded border-4 border-rosa1"
          />
          <div className='lg:px-10  text-center'>
          <h3 className="lg:text-2xl lora text-purple1  lg:py-5">¿QUÉ TIPO DE EVENTOS OFRECEMOS A LAS MUJERES DE NUESTRA COMUNIDAD?</h3>
          <p className="text-gray-600 montserrat mt-2 lora text-left lg:w-[95%] lg:mx-auto lg:pl-3 lg:py-4">Desayunos temáticos relacionados con Make up, Moda, Deco & Lifestyle, Travel, Arte, Wellness, en las mejores locaciones de Nordelta y también en Punta del Este.
Además generamos eventos y actividades de Networking que concovocan a emprendedoras y mujeres profesionales de la zona. 
Cada evento es planeado y llevado a cabo cuidando cada detalle: ambientación, catering, obsequios, logrando que cada experiencia... Más</p>
</div>
        </div>
      </div>
    </section>   

    </>
  )
}
