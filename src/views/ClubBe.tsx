import { Banner } from "../componentes/Recomendaciones/Banner"
import bannerClubBe from '../beConnection_Assets/club-be-imagenes/banner-club-be.jpg'
import { ClubBeInfo } from "../componentes/ClubBe/ClubBeInfo"
import { Tematicas } from "../componentes/ClubBe/Tematicas"
export const ClubBe = () => {
  return (
    <>

    <Banner imagen={bannerClubBe}/>
    <ClubBeInfo/>
    <Tematicas/>
    </>
  )
}
