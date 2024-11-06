import conocemas3 from '../../beConnection_Assets/home-imagnees/3-conoce-mas.png'
import conocemas4 from '../../beConnection_Assets/home-imagnees/4-conoce-mas.png'
import conocemas5 from '../../beConnection_Assets/home-imagnees/5-conoce-mas.png'

export const ConocerMás = () => {
  return (
    <>
      <section className="py-12 ">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">CONOCE MÁS SOBRE BE!</h2>
      </div>
      <div className="grid grid-cols-3   md:flex-row flex justify-center items-center gap-6">
        {/* Tarjeta 1 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas3}
            alt="Imagen 1"
            className="w-full h-auto mb-4 rounded border-2 border-rosa1"
          />
          <h3 className="text-xl font-semibold text-gray-700">Subtítulo 1</h3>
          <p className="text-gray-600 mt-2">Descripción de la imagen 1.</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas4}
            alt="Imagen 2"
            className="w-full h-auto mb-4 rounded border-2 border-rosa1"
          />
          <h3 className="text-xl font-semibold text-gray-700">Subtítulo 2</h3>
          <p className="text-gray-600 mt-2">Descripción de la imagen 2.</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="col-span-1   p-4  text-center">
          <img
            src={conocemas5}
            alt="Imagen 3"
            className="w-full h-auto mb-4 rounded border-2 border-rosa1"
          />
          <h3 className="text-xl font-semibold text-gray-700">Subtítulo 3</h3>
          <p className="text-gray-600 mt-2">Descripción de la imagen 3.</p>
        </div>
      </div>
    </section>   

    </>
  )
}
