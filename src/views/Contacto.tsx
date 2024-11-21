import { Banner } from "../componentes/Recomendaciones/Banner"
import bannerContacto from '../beConnection_Assets/Contacto/banner_contacto.jpg'
import { ContactoForm } from "../componentes/Contacto/ContactoForm"
export const Contacto = () => {
  return (
    <>

    <Banner imagen={bannerContacto}/>
    <ContactoForm/>
    </>
  )
}
