import { RouteItem } from "@/src/types/routes";
import Link from "next/link";

export default function FeaturedPosItem({category}:{category:RouteItem}){
    return(
        <div className="blog-post-item">
        <img src={category.image} alt={category.title} />
        <div className="blog-post-content">
            
            <h2><Link href={category.slug}>{category.title}</Link></h2>
            <p>{category.description}</p>
            <Link  href={category.slug} className="read-more">Leer sobre {category.title} <i className="bi bi-arrow-right"></i></Link>
        </div>
        </div>
    )
}