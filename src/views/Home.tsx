import { Barra } from "../componentes/Barra"
import { BeInfo } from "../componentes/home/BeInfo"
import { Carrousel } from "../componentes/home/Carrousel"
import { ClubBe } from "../componentes/home/ClubBe"
import { ConocerMás } from "../componentes/home/ConocerMás"

export const Home = () => {
  return (
    <>
      <Carrousel/>
      <BeInfo/>
      <ConocerMás/>
      <Barra text1="¿QURÉS SER PARTE DE UNO DE NUESTROS" text2="DESAYUNOS?" />
      <ClubBe/>
      
    </>
  )
}
