import { Outlet } from 'react-router-dom'
import { Footer } from '../componentes/Footer'
import {Navbar} from '../componentes/Navbar'

export const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
)
}
