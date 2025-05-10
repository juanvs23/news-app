/* eslint-disable @next/next/no-img-element */
import { ArticlesInterface } from "@/src/types/articles";
import  styles from './articleComponent.module.css';
import defaulPostImage from '../../../../public/image/defaultpostimage.jpg';

export default function ArticleComponent({article}:{article:ArticlesInterface}){
    const {title,urlToImage,url,description} = article;
    const image = urlToImage? urlToImage : defaulPostImage.src;
    return(
        <div data-aos="fade-up" className="d-flex align-articles-stretch col-md-6 col-xl-4 mb-4">
            <article className="card">
                <img src={image} className="card-img-top" alt={title} style={{aspectRatio:'16/9',objectFit:'cover'}} />
                <div className="card-body">
                    <h2 className="card-title title">{title}</h2>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <div className="card-footer d-flex  gap-2" style={{backgroundColor:'transparent'}}>
                    <a target="_blank" href={url} className={`btn ${styles.btnnotice}`}>Ver Fuente</a>
                </div>
            </article>
        </div>
    )
}