
interface CardConocerMasProps {
    imagen: string;       // Si es una URL o ruta de imagen
    titulo: string;       // El título del card
    p1: string;           // Primer párrafo
    p2?: string;           // Segundo párrafo
    span?: string;
}


export const CardConocerMas = ({ imagen, titulo, p1, p2, span }: CardConocerMasProps) => {
    return (
        <>
            <div className="col-span-1   p-4 sm:p-2 lg:p-0  text-center">
                <img
                    src={imagen}
                    alt="Imagen 1"
                    className="w-full h-auto mb-4 rounded border-4 border-rosa1 min-[590px]:max-w-[490px] min-[590px]:mx-auto"
                />
                <div className='text-center lg:px-0 '>

                    <h3 className="sm:text-sm  md:text-base lg:text-2xl md:text-justify lg:text-center  lora text-purple1 sm:px-2  lg:px-3 ">{titulo}</h3>
                    <p className="sm:text-sm md:text-sm text-gray-600 montserrat mt-2 lora text-justify md:text-justify  lg:mx-auto sm:px-2  lg:py-4">{p1} {span && span} </p>
                    {p2 && <p className="sm:text-sm md:text-sm text-gray-600 montserrat mt-2 lora text-justify md:text-justify  lg:mx-auto sm:px-2 " >{p2}</p>}
                </div>
            </div>
        </>
    )
}
