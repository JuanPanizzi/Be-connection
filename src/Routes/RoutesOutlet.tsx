import { HashRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "../componentes/shared/ScrollTop"
import { MainLayout } from "../views/MainLayout"
import { Home } from "../views/Home"
import { Recomendaciones } from "../views/Recomendaciones"
import { Newsletter } from "../views/Newsletter"
import { ClubBe } from "../views/ClubBe"
import { Contacto } from "../views/Contacto"

export const RoutesOutlet = () => {
  return (
    <HashRouter>
        <ScrollToTop />
        <Routes>
          
            <Route path="/" element={<MainLayout />}>

                <Route index element={<Home />} />
                <Route path="recomendaciones" element={<Recomendaciones/>}/>
                <Route path="newsletter" element={<Newsletter/>}/>
                <Route path="club" element={<ClubBe/>}/>
                <Route path="contacto" element={<Contacto/>}/>


                

            </Route>



        </Routes>
    </HashRouter>

)
}
