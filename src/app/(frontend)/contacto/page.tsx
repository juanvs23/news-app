import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import defaultImage from '../../../../public/image/img_2.jpg'
import { metadataConstants, siteName } from "../../../constants/metadata";
import TitleComponent from '../../components/titleComponent';
import ContactForm from '../../components/ContactForm/ContactForm';
import AosWrapper from '../../components/AosWrapper';

export const  metadata = {...metadataConstants,title:`Contacto | ${siteName}`}

export default function AboutPage() {
  return (
    <AosWrapper>
       <TitleComponent title="Contacto" img={`${defaultImage.src}`} subTitle="Deja tu información aqui o se deseas recibir información sobre mis futuros proyectos"  breadcumbs={[{title:'Contacto'}]} />
       <section id="contact" className="contact section">
      <div className="container">
      <div className="row gy-4 mb-5">
       <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="info-card">
              <div className="icon-box">
              <FaGithub />
              </div>
                <h3>GitHub</h3>
                <p><a href='https://github.com/juanvs23' target='_blank'>GitHub</a></p>
              </div>
        </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="info-card">
              <div className="icon-box">
              <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p><a href='https://www.linkedin.com/in/juanvs23/' target='_blank'>Juan Carlos Avila</a></p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="info-card">
              <div className="icon-box">
              <FaWhatsapp />
              </div>
              <h3>What´sApp</h3>
              <p><a href="http://wa.me/584248310009" target="_blank" rel="noopener noreferrer">+584248310009</a></p>
            </div>
          </div>
        </div>
        <ContactForm/>
      </div>
       </section>
    </AosWrapper>
  );
}
