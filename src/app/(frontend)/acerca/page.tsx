import { metadataConstants, siteName } from "../../../constants/metadata";
import CallToActionComponent from "../../components/callToActionComponent";
import TitleComponent from "../../components/titleComponent";
import defaultImage from '../../../../public/image/img_2.jpg'
import { RiNextjsLine, RiSupabaseLine } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiSwiper } from "react-icons/si";
import { FaBootstrap, FaWifi } from "react-icons/fa";

export const  metadata = {...metadataConstants,title:`Inicio | ${siteName}`}

export default function AboutPage() {
  return (
    <>
    <TitleComponent title="Acerca de News App" img={`${defaultImage.src}`} subTitle="Aquí les hacemos una pequeña explicación sobre este sitio, su función y como funciona"  breadcumbs={[{title:'Acerca'}]} />
      <section id="about" className="about section">
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <span className="section-badge"><i className="bi bi-info-circle"></i> Qué es <div className="news-app" style={{letterSpacing:'-2px;'}}>News App</div></span>
        <div className="row">
          <div className="col-lg-6">
            <p className="about-description">News app es un sitio creado con <b className="news-app">Nextjs 15</b> con fines netamente practico, y educativo. Esta aplicación <b>NO</b> tiene fines de lucro. Su principal objetivo es realizar prueba de funcionamiento de <b className="news-app">Nextjs</b> como un sitio de blog de noticias aplicando un starter theme con <b className="news-app">bootstrap 5</b>.</p>
            <p className="about-description">Este proyecto tiene dos formulario y toda la data se guarda en un sistema con persistencia en Supabase, esta tecnología se tomo en cuenta por ser practica y fácil de trabajar.</p>
          </div>
          <div className="col-lg-6">
            <p className="about-text">El sitio web fue desarrollado en una semana tomando como base la plantilla BLOGGY de <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade.</a> Mi intención al indicar todos estos puntos es aclarar es No estoy lucrando directamente con este proyecto y menciono todas las tecnologías y herramientas que utilice para mostrar que este proyecto se realizo con fines demostrativos. </p>
            
          </div>
        </div>

        <div className="row justify-content-center features-boxes gy-4 mt-3">
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="icon-box">
                <RiNextjsLine />
              </div>
              <h3><a href="https://nextjs.org/" target="_blank" className="stretched-link">Nextjs</a></h3>
              <p>Framework React para aplicaciones web estáticas y dinámicas con renderizado híbrido, enrutamiento y optimización integrada. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="icon-box">
                <RiSupabaseLine />
              </div>
              <h3><a href="https://supabase.com/" target="_blank" className="stretched-link">Supabase</a></h3>
              <p>Es una Alternativa open-source a Firebase con base de datos Postgres, autenticación, almacenamiento y APIs listas para usar. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="icon-box">
                <FaBootstrap />
              </div>
              <h3><a href="https://getbootstrap.com/" className="stretched-link">Bootstrap</a></h3>
              <p>Framework CSS para diseño responsive con componentes preestilizados, grid system y utilidades para desarrollo web rápido.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="icon-box">
                <DiJavascript />
              </div>
              <h3><a href="https://michalsnik.github.io/" target="_blank" className="stretched-link">Animate On Scroll</a></h3>
              <p>Librería ligera para animar elementos al hacer scroll, con efectos predefinidos y fácil configuración.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="icon-box">
              <SiSwiper />
              </div>
              <h3><a href="https://swiperjs.com/" target="_blank" className="stretched-link">Swiper</a></h3>
              <p>Librería JavaScript para crear sliders/carruseles táctiles, responsive y altamente personalizables con soporte para móviles.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="icon-box">
              <FaWifi />
              </div>
              <h3><a href="https://newsapi.org/" target="_blank" className="stretched-link">News API</a></h3>
              <p>Servicio que proporciona acceso a titulares y artículos de miles de fuentes, ideal para integrar noticias en aplicaciones. </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12" data-aos="zoom-in" data-aos-delay="200">
            <CallToActionComponent/>
          </div>
        </div>

      </div>

    </section>
    </>
  );
}
