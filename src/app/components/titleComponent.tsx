import { BreadCumbInterface } from "@/src/types/routes";
import Link from "next/link";

const TitleName = ( {title,slug,index,last}:{title:string,slug:string,index:number,last:number} )=> index!==last ?  <Link href={slug}>{title}</Link>:<span>{title}</span>
export default function TitleComponent({title,subTitle,breadcumbs,img}:{img?:string,title:string,subTitle?:string,breadcumbs?:BreadCumbInterface[],back?:string}){

    const style = img? {backgroundImage:`url(${img})`}:{}
    return(
        <div className="container" data-aos="fade-in" data-aos-delay="100">
            <div className="page-title" style={style}>
            <div className="breadcrumbs">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/"><i className="bi bi-house"></i> Inicio</Link></li>
                        {  breadcumbs?.map((breadcumb,index)=>{
                                return( 
                                    <li key={index} className={`breadcrumb-item${index==breadcumbs.length-1?' active current':''}`}>
                                        <TitleName index={index} last={breadcumbs.length-1} title={breadcumb.title} slug={breadcumb.slug||''} />
                                    </li>
                                )
                            })}
                    </ol>
                </nav>
            </div>
            <div className="title-wrapper">
                <h1>{title}</h1>
                {
                    subTitle&&<p>{subTitle}</p>
                }
            </div>
        </div>
        </div>
    )
}