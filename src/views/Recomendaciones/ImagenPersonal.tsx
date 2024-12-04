import { Banner } from "../../componentes/Recomendaciones/Banner"
import bannerImgPersonal from '../../beConnection_Assets/Imagen-personal-imagenes/imagen-personal-banneer.png'
import { HeaderImgPersonal } from "../../componentes/Recomendaciones/ImagenPersonal/HeaderImgPersonal"
import { Servicios } from "../../componentes/Recomendaciones/ImagenPersonal/Servicios"
export const ImagenPersonal = () => {
  return (
    <>
    <Banner imagen={bannerImgPersonal} />
    <HeaderImgPersonal/>
    <Servicios/>
    </>
  )
}
