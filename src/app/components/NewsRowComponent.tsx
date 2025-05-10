import { ArticlesInterface } from "@/src/types/articles";
import ArticleComponent from "./articlesComponent/articleComponent";



export default function NewsRowComponent({newsItems}:{newsItems:ArticlesInterface[] }) {
    
    
    return (
        <>
        <div  className="latest-posts row d-flex">
            {newsItems.map((item, index) => (
                item.title && <ArticleComponent key={index} article={item} />
            ))}
        </div>
            </>
        
    );
}