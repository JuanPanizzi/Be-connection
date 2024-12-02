import { Barra } from "../componentes/Barra"
import { BeInfo } from "../componentes/home/BeInfo"
import { Carrousel } from "../componentes/home/Carrousel"
import { ClubBeInfo } from "../componentes/home/ClubBeInfo"
import { ConocerMás } from "../componentes/home/ConocerMás"
// import { Marcas } from "../componentes/Marcas"

export const Home = () => {
  return (
    <>
      <Carrousel/>
      <BeInfo/>
      <ConocerMás/>
      <Barra text1="¿QURÉS SER PARTE DE UNO DE NUESTROS" text2="DESAYUNOS?" />
      <ClubBeInfo/>
      {/* <Marcas/> */}
      <Barra text1="RECIBÍ INVITACIONES Y NOVEDADES EN TU" text2="WHATSAPP"/>
    </>
  )
}
