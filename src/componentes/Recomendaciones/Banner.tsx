import mujeres from '../../beConnection_Assets/Recomendaciones-imagenes/banner.jpg'
export const Banner = () => {
  return (
    <>
     <div className="relative w-full h-[350px] overflow-hidden">
      <img src={mujeres} alt="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
    </div>
    </>
  )
}
