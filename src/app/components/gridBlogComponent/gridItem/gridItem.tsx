import { ArticlesInterface } from "@/src/types/articles";

export default function GridItem({article,keyItem}:{article:ArticlesInterface,keyItem:number}){
    const  {
        title,
        url,
        urlToImage,
        author,
        publishedAt,
        
    } = article;

    const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    return(
        <article className={`blog-item${keyItem === 0 ? ' featured' : ''}`} data-aos="fade-up">
            <img src={urlToImage} alt={title} className="img-fluid" />
            <div className="blog-content">
                <div className="post-meta">
                    <span className="date">{formattedDate}</span>
                    <span className="category">{author}</span>
                </div>
                <h2 className="post-title">
                    <a href={url} title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">{title}</a>
                </h2>
            </div>
      </article>
    )
}