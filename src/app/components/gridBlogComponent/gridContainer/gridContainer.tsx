
import { GetNewParams } from "@/src/types/axios";
import getNews from "@/src/utils/getNews"
import GridItem from "../gridItem/gridItem";
import { ArticlesInterface } from "@/src/types/articles";

export default async function GridContainer(){
    
    
    const newParams:GetNewParams = {path:'top-headlines',sources:'bbc-news',pageSize:5,currentPage:1};  
    const {articles} = await getNews(newParams);
    return(
        <section id="blog-hero" className="blog-hero section" >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="blog-grid">
            {
                articles.map((article:ArticlesInterface,index:number) => <GridItem article={article} keyItem={index} key={index} />)
            }
          </div>
        </div>
      </section>
    )
}