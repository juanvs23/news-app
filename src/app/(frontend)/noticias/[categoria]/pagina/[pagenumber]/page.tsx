import AosWrapper from "@/src/app/components/AosWrapper";
import NewsRowComponent from "@/src/app/components/NewsRowComponent";
import PaginationComponent from "@/src/app/components/paginationComponent/paginationComponent";
import TitleComponent from "@/src/app/components/titleComponent";
import { metadataConstants, siteName } from "@/src/constants/metadata";
import { GetNewParams } from "@/src/types/axios";
import getCategory from "@/src/utils/getCategory";
import getNews from "@/src/utils/getNews";
import getTheTitle from "@/src/utils/getTheTitle";



export type ParamsType = Promise<{ categoria: string, pagenumber: string }>;

type Props = {
  params:ParamsType;
};


export async function  generateMetadata({ params }: Props) {

  const { categoria, pagenumber } = await params;
  const categeryObject = getCategory(categoria)
 
  const title = pagenumber ? ` ${categeryObject?.title} - Pagina ${pagenumber} | ${siteName}`:` ${categeryObject?.title} | ${siteName}`


  return {
    ...metadataConstants,
    title,
    description: `Consulte aquí las últimas publicaciones sobre ${categeryObject?.title}, organizadas en un archivo claro y accesible. Nuestro equipo recopila la información más relevante para mantenerle informado con rigor`
  }
}


export default async function CategoryPageNumber({params}: Props) {


  const {categoria,pagenumber} = await params

  const newParams:GetNewParams = {path:'everything',q:categoria,currentPage:parseInt(pagenumber)};
  
  const {articles,current,totalPage} = await getNews(newParams);
  
    const currentPage = current?  current  : 1
    const total =   totalPage ? totalPage: 1
    const slug = `/noticias/${categoria}/pagina/`
    const categeryObject = getCategory(categoria)
    console.log(categeryObject);
  return (
      <AosWrapper>
        <TitleComponent  subTitle={categeryObject?.description} title={categeryObject?.title||''} img={`${categeryObject?.image}`} breadcumbs={[{title:getTheTitle(categoria),slug:`/noticias/${categoria}`},{title:pagenumber}]} />
        <section className="container pt-0">
          <NewsRowComponent newsItems={articles} />
          <PaginationComponent currentPage={currentPage<6?currentPage:6} totalPage={total} category={slug} />
        </section>
      </AosWrapper>
  );
}
