import conocemas3 from '../../beConnection_Assets/home-imagnees/3-conoce-mas.png'
import conocemas4 from '../../beConnection_Assets/home-imagnees/4-conoce-mas.png'
import conocemas5 from '../../beConnection_Assets/home-imagnees/5-conoce-mas.png'

export const ConocerMás = () => {
  return (
    <>
      <section className="py-12 ">
      <div className="text-center mb-8">
        <h2 className="lg:text-6xl font-thin ">CONOCÉ MÁS SOBRE BE!</h2>
      </div>
      <div className="grid grid-cols-3   md:flex-row flex justify-center items-center gap-4 px-6">
        {/* Tarjeta 1 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas3}
            alt="Imagen 1"
            className="w-full h-auto mb-4 rounded border-4 border-rosa1"
          />
          <div className='px-10'>

          <h3 className="lg:text-2xl lora text-purple1  ">¿POR QUÉ UN CLUB DE MUJERES EN NORDELTA?</h3>
          <p className="text-gray-600 mt-2 lora text-left">La zona de Nordelta y alrededores tuvo un gran crecimiento en los últimos años. Aún no tiene una identidad definida, pero si tanto los barrios que componen Nordelta, como los barrios vecinos, continuan creciendo y haciendose fuertes como comunidad. 
          Como vecina de Nordelta, conozco muy bien este día a día, los gustos y preferencias en particular de las mujeres. Por eso Be Connections nace para conectar, unir y generar sinergías. </p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas4}
            alt="Imagen 2"
            className="w-full h-auto mb-4 rounded border-4 border-rosa1"
          />
          <h3 className="text-xl font-semibold ">Subtítulo 2</h3>
          <p className="text-gray-600 mt-2">Descripción de la imagen 2.</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas5}
            alt="Imagen 3"
            className="w-full h-auto mb-4 rounded border-4 border-rosa1"
          />
          <h3 className="text-xl font-semibold ">Subtítulo 3</h3>
          <p className="text-gray-600 mt-2">Descripción de la imagen 3.</p>
        </div>
      </div>
    </section>   

    </>
  )
}
