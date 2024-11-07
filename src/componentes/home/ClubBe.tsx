import club from '../../beConnection_Assets/club-be-imagenes/1-clube-be.png'
export const ClubBe = () => {
  return (
    <article>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-red-200">
                <div className="flex  justify-center items-center p-4 md:p-8 rounded-lg bg-red-500 col-span-1">
                    <img
                        src={club}
                        alt="beConnections"
                        className="w-full object-left h-auto object-contain rounded-t-[40%]"
                    />
                </div>
                <div className="  flex flex-col justify-center py-16  text-right lg:p-20 col-span-2">
                    <h1 className="text-2xl mb-2 lg:text-6xl">SOBRE ROSE</h1>
                    <h2 className="text-xl text-purple1 lg:text-3xl my-6">¿QUIÉN ESTÁ DETRÁS DE BE CONNECTIONS?</h2>
                    <p className="text-gray-700 text-lg montserrat">
                    Soy Rose Alamo, Contadora y Lic. en Aminidtración con formación en Marketing y Publicidad.  Fui expatriada por 14 años donde gané experiencia y me enriquecí organizando encuentros para mujeres en diferentes ciudades, principalmente en Abu Dhabi, Emiratos Árabes. Al regresar a mi país, hace seis años, quise replicar lo mejor de lo vivido en cada ciudad (San Pablo, Abu Dhabi, Londres), creando experiencias únicas, para mujeres que aman verse bellas, valoran un estilo de vida saludable y sobre todo, desean conectar con otras mujeres, enriqueciéndose en cada encuentro unas de otras.
                    </p>
                    <p className='font-semibold text-purple1 text-lg montserrat lg:mt-5'>Conocer las vivencias de cada una es muy enriquecedor!</p>
                </div>
            </section>
    </article>
  )
}
