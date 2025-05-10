import { categories } from "@/src/routes/categories";
import { RouteItem } from "@/src/types/routes";
import Link from "next/link";

export default function Header() {
    return (
        <header id="header" className="header position-relative">
        <div className="container-fluid container-xl position-relative">
    
          <div className="top-row d-flex align-items-center justify-content-between">
            <Link href="/" className="logo d-flex align-items-end">
             
            {
            //<!-- <img src="assets/img/logo.webp" alt=""> -->
            }
              <h1 className="sitename">News App</h1><span>.</span>
            </Link>
    
            <div className="d-flex align-items-center">
              <div className="social-links">
                <Link href="https://coltmandev.dev" className="facebook" target="_blank"><i className="bi bi-globe"></i></Link>
                <Link href="https://www.linkedin.com/in/juanvs23/" className="twitter"  target="_blank"><i className="bi bi-linkedin"></i></Link>
                <Link href="https://github.com/juanvs23" className="instagram"  target="_blank"><i className="bi bi-github"></i></Link>
              </div>
            </div>
          </div>
    
        </div>
    
        <div className="nav-wrap">
          <div className="container d-flex justify-content-center position-relative">
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/acerca">Acerca</Link></li>
                <li className="dropdown"><a href="#"><span>Noticias</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    {categories.map((item:RouteItem)=>(<li key={item.id}><Link href={item.slug}>{item.title}</Link></li>))}
                  </ul>
                </li>
                <li><Link href="/contacto">Contacto</Link></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
          </div>
        </div>
    
      </header>
    );
}