
export const CardServicios = ({ imagen, titulo, p1, p2, ig1, ig2, italic, contacto }: any) => {
  return (

    <>
      <div className="col-span-1   p-4  text-center">
        <img
          src={imagen}
          alt="Imagen 1"
          className="w-full h-auto mb-4 rounded border-4 border-rosa1 mx-auto max-w-[200px] lg:max-w-[350px]"
        />
        <div className='text-center lg:px-4 max-w-[300px] lg:max-w-[400px]  mx-auto'>

          <h3 className="mb-2 sm:text-sm  lg:text-2xl xl:text-3xl md:text-center lg:text-center  lora text-purple1  lg:px-1 ">{titulo}</h3>
          <p className="text-[0.9rem] sm:text-sm md:text-md lg:text-lg xl:text-xl  ">{p1}</p>
          <p className="text-[0.9rem] sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold">{ig1}</p>
          {ig2 && <p className="text-[0.9rem] sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold">{ig2}</p>}
          <p className="text-[0.9rem] sm:text-sm md:text-md lg:text-lg xl:text-xl ">{p2}</p>
          {italic && <p className="text-[0.9rem] sm:text-sm md:text-md lg:text-lg xl:text-xl"> <i> {italic} </i>Jung.</p>}

          <p className="text-[0.9rem] sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold text-purple1">{contacto}</p>
        </div>
      </div>
    </>
  )
}
