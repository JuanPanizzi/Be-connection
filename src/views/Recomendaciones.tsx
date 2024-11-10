import { Barra } from '../componentes/Barra'
import { Banner } from '../componentes/Recomendaciones/Banner'
import { RecomendacionesInfo } from '../componentes/Recomendaciones/RecomendacionesInfo'

export const Recomendaciones = () => {
  return (
    <>
    <Banner/>
    <RecomendacionesInfo/>
    <Barra text1="¿QUERÉS DAR A CONOCER TU MARCA A LAS MUJERES DE NORDELTA?" text3="Hablemos sobre cómo podés incluir tu marca o dar a conocer tus productos o servicios en los eventos, producciones y desayunos de mujeres de Be Connections" />
    </>
  )
}
