import beInfo1 from '../../beConnection_Assets/beInfo/beInfo1.jpg';
import rose from '../../beConnection_Assets/beInfo/rose.jpg';

export const BeInfo = () => {
    return (
        <article className="">
            <section className="grid grid-cols-1 md:grid-cols-2 md:gap-4  md:gap-8">
                <div className="  flex flex-col justify-center  px-10 pt-10 pb-2 md:p-10">
                    <h1 className="text-center text-3xl  md:mb-2 lg:text-6xl">SOBRE BE!</h1>
                    <h2 className="text-center text-lg text-purple1 lg:text-3xl my-4  md:my-6">DE QUÉ SE TRATA BE CONNECTIONS</h2>
                    <p className="text-sm text-justify text-gray-700 text-lg montserrat">
                        Be Connections es una comunidad de mujeres en Nordelta que buscan generar conexiones, sinergías y amigas, de la manera más linda y divertida posible, disfrutando de desayunos, eventos y acciones junto a marcas que nos miman y nos encantan. Periódicamente realizamos desayunos temáticos: desde beauty & lifestyle a encuentros para emprendedoras y mujeres profesionales todas son oportunidades para conectar, hacer nuevas amigas o ampliar nuestra red de contactos.
                    </p>
                </div>
                <div className="flex justify-center  items-center p-4 md:p-8 rounded-lg">
                    <img
                        src={beInfo1}
                        alt="beConnections"
                        className=" w-full max-h-[300px] sm:max-h-[360px] md:w-[560px] md:h-[390px] object-top object-cover px-5 py-0   rounded-lg"
                    />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="flex  justify-center items-center p-4 md:p-8 rounded-lg  col-span-1">
                    <img
                        src={rose}
                        alt="beConnections"
                        className="w-full object-left mx-auto h-auto object-contain rounded-t-[100%]"
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
    );
};
