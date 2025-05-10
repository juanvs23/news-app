import ctaImage from '../../../../public/image/cta-1.webp'
import SuscribeComponent from './suscribeComponent';
export default function CallToActionComponent(){
  
    return(
        <section id="call-to-action" className="call-to-action section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="cta-content" data-aos="fade-up" data-aos-delay="200">
                <h2>Suscríbase a nuestro  newsLetter</h2>
                <p>Para recibir las ultimas noticias de nuestros próximos proyectos</p>
               <SuscribeComponent/>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cta-image" data-aos="zoom-out" data-aos-delay="200">
                <img src={ctaImage.src} alt="Imagen CTA" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}