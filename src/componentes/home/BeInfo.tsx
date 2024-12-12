// import beInfo1 from '../../beConnection_Assets/beInfo/beInfo1.jpg';
import rose from '../../beConnection_Assets/beInfo/rose.jpg';
import beInfo1   from '../../beConnection_Assets/Carrousel/rosePrincipal.jpeg';

export const BeInfo = () => {
    return (
        <article className="xl:max-w-[2000px] mx-auto xl:px-20"  id='be-info'>
            <section className="flex flex-col-reverse items-center sm:flex-row  mt-10  sm:px-2 lg:px-5 xl:px-0 ">
                <div className="mx-auto flex flex-col justify-center sm:justify-start px-10 sm:px-0 pt-10 sm:pt-0 pb-2 sm:pb-0 sm:pr-2 xl:px-0  sm:w-full ">
                    <h1 className="text-center sm:text-left  text-3xl   lg:text-6xl xl:text-7xl 2xl:text-7xl">SOBRE BE!</h1> 
                    <h2 className="text-center sm:text-left text-lg text-purple1 lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.6rem] xl:leading-tight my-4  sm:my-6 ">DE QUÉ SE TRATA BE CONNECTIONS</h2>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify sm:text-left text-gray-700  montserrat ">
                        Be Connections es una comunidad de mujeres en Nordelta que buscan generar conexiones, sinergias y amigas, de la manera más linda y divertida posible, disfrutando de desayunos, eventos y acciones junto a marcas que nos miman y nos encantan. Periódicamente realizamos desayunos temáticos: desde beauty & lifestyle a encuentros para emprendedoras y mujeres profesionales todas son oportunidades para conectar, hacer nuevas amigas o ampliar nuestra red de contactos.
                    </p>
                </div>
                <div className="flex justify-center xl:justify-end  items-center   sm:w-full">
                    <img
                        src={beInfo1}
                        alt="beConnections"
                        className=" w-full  sm:w-[90%] lg:max-w-full xl:max-w-[80%]  sm:ml-auto max-h-[250px] sm:max-h-[320px]  lg:max-h-[440px] xl:max-h-[490px] 2xl:max-h-[550px] object-top object-cover px-5 sm:px-0 py-0   "
                    />
                </div>
            </section>
            <section className=" flex flex-col-reverse items-center sm:flex-row  pt-5 sm:pt-0 xl:mt-32  sm:px-2 lg:px-5 xl:px-0 ">
                <div className="flex justify-center px-10 sm:px-0 xl:px-0  h-full min-[500px]:h-[400px] sm:h-[600px] items-center   w-full   sm:w-[45%] mt-5 mb-16 sm:mt-0 sm:mb-0  lg:justify-start ">
                    <img
                        src={rose}
                        alt="beConnections"
                        className=" sm:rounded-t-[100%] object-cover h-full  min-h-[550px]:w-full  sm:max-h-[390px] md:max-h-[450px] lg:max-h-[520px] xl:max-h-[540px] "
                    />
                </div>
                <div className=" flex flex-col justify-center px-10 sm:px-0 sm:pl-5 lg:pl-0 lg:pr-0 sm:py-5  pt-10 min-[550px]:pt-0 pb-2 min-[550px]:pb-0 sm:w-[55%]">
                    <h1 className="text-center sm:text-right  text-3xl lg:text-6xl xl:text-7xl 2xl:text-7xl">SOBRE ROSE</h1>
                    <h2 className="text-center sm:text-right text-lg text-purple1 lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.6rem] xl:leading-tight my-4  md:my-6">¿QUIÉN ESTÁ DETRÁS DE BE CONNECTIONS?</h2>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify sm:text-right text-gray-700  montserrat">
                    Soy Rose Alamo, Contadora y Lic. en Administración con formación en Marketing y Publicidad. Fui expatriada por 14 años, donde gané experiencia y me enriquecí organizando encuentros para mujeres en diferentes ciudades, principalmente en Abu Dhabi, Emiratos Árabes. Al regresar a mi país, hace seis años, quise replicar lo mejor de lo vivido en cada ciudad (São Paulo, Abu Dhabi, Londres), creando experiencias únicas para mujeres que aman verse bellas, valoran un estilo de vida saludable y, sobre todo, desean conectar con otras mujeres, enriqueciéndose en cada encuentro unas a otras.
                    </p>
                    <p className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify sm:text-right font-semibold text-purple1  montserrat mt-2 lg:mt-5'>¡Conocer las vivencias de cada una es muy enriquecedor!</p>
                </div>
            </section>
        </article>
    );
};
