import { HashRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "../componentes/shared/ScrollTop"
import { MainLayout } from "../views/MainLayout"
import { Home } from "../views/Home"
import { Recomendaciones } from "../views/Recomendaciones"

export const RoutesOutlet = () => {
  return (
    <HashRouter>
        <ScrollToTop />
        <Routes>
          
            <Route path="/" element={<MainLayout />}>

                <Route index element={<Home />} />
                <Route path="recomendaciones" element={<Recomendaciones/>}/>

            </Route>



        </Routes>
    </HashRouter>

)
}
