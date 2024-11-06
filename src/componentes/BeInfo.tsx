import beInfo1 from '../assets/beInfo1.jpg';

export const BeInfo = () => {
    return (
        <article className="">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="  flex flex-col justify-center  p-10">
                    <h1 className="text-2xl mb-2 lg:text-6xl">SOBRE BE!</h1>
                    <h2 className="text-xl text-purple1 lg:text-3xl my-6">DE QUÉ SE TRATA BE CONNECTIONS</h2>
                    <p className="text-gray-700 text-lg montserrat-400">
                        Be Connections es una comunidad de mujeres en Nordelta que buscan generar conexiones, sinergías y amigas, de la manera más linda y divertida posible, disfrutando de desayunos, eventos y acciones junto a marcas que nos miman y nos encantan. Periódicamente realizamos desayunos temáticos: desde beauty & lifestyle a encuentros para emprendedoras y mujeres profesionales todas son oportunidades para conectar, hacer nuevas amigas o ampliar nuestra red de contactos.
                    </p>
                </div>
                <div className="flex justify-center items-center p-4 md:p-8 rounded-lg">
                    <img
                        src={beInfo1}
                        alt="beConnections"
                        className="w-[550px] h-[390px] object-[top] object-cover p-5 rounded-lg"
                    />
                </div>
            </section>
        </article>
    );
};
