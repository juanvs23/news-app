import Link from "next/link";
import FooterLinks from "./footerLinks";
import { categories } from "@/src/routes/categories";
import { interestingLink } from "@/src/routes/interesting";
import { proyectosLink } from "@/src/routes/proyectos";


export default function Footer() {
  return (
    
 
<>
<footer id="footer" className="footer">

<div className="container footer-top">
  <div className="row gy-4">
    <div className="col-lg-3 col-md-3 footer-about">
      <Link href="/" className="logo d-flex align-items-center">
        <span className="sitename">News App</span>
      </Link>
      <div className="footer-contact pt-3">
        
        <p><a href="mailto:contact@coltmandev.dev"><strong>Email:</strong> <span>contact@coltmandev.dev</span></a></p>
      </div>
      <div className="social-links d-flex mt-4">
        
        <a href="https://coltmandev.dev" target="_blank"><i className="bi bi-globe"></i></a>
        <a href="https://www.linkedin.com/in/juanvs23/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/juanvs23" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
      </div>
    </div>

    <div className="col-md-3 footer-links">
    <FooterLinks routes={interestingLink} title="Enlaces de Interés" /> 
    </div>
    <div className="col-md-3 footer-links">
     <FooterLinks routes={categories} title="Categorías" /> 
    </div>

    <div className="col-md-3 footer-links">
      <FooterLinks routes={proyectosLink} title="Proyectos" /> 
    </div>

  </div>
</div>

<div className="container copyright text-center mt-4">
  <p>©  <strong className="px-1 sitename">News App</strong> <span>Desarrollador por <a target="_blank" href="https://coltmandev.dev">Juan Carlos Avila</a></span></p>
</div>

</footer>


<a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


</>
  )
}
