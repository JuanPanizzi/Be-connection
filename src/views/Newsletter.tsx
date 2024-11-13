import { Banner } from '../componentes/Recomendaciones/Banner';
import mujeresNewsletter from '../beConnection_Assets/newsletter/news-letter-banner.jpg'
import { NewsLetterInfo } from '../componentes/NewsLetter/NewsLetterInfo';

export const Newsletter = () => {
    return (
        <>
        <Banner imagen={mujeresNewsletter}/>
        <NewsLetterInfo/>
        </>
      );
}
