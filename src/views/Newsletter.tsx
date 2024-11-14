import { Banner } from '../componentes/Recomendaciones/Banner';
import mujeresNewsletter from '../beConnection_Assets/newsletter/news-letter-banner.jpg'
import { NewsLetterInfo } from '../componentes/NewsLetter/NewsLetterInfo';
import { Barra } from '../componentes/Barra';

export const Newsletter = () => {
    return (
        <>
        <Banner imagen={mujeresNewsletter}/>
        <NewsLetterInfo/>
        <Barra text1="RECIBÍ INVITACIONES Y NOVEDADES EN TU" text2="WHATSAPP"/>
        </>
      );
}
