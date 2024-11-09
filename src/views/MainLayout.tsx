import { Outlet } from 'react-router-dom'
import { Navbar } from '../componentes/Navbar'
import { Footer } from '../componentes/Footer'

export const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
)
}
