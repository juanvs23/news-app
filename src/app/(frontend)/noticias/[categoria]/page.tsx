import AosWrapper from "@/src/app/components/AosWrapper";
import NewsRowComponent from "@/src/app/components/NewsRowComponent";
import PaginationComponent from "@/src/app/components/paginationComponent/paginationComponent";
import TitleComponent from "@/src/app/components/titleComponent";
import { GetNewParams } from "@/src/types/axios";
import getNews from "@/src/utils/getNews";
import { metadataConstants, siteName } from "@/src/constants/metadata";
import getCategory from "@/src/utils/getCategory";



export type paramsType = Promise<{ categoria: string }>;

type Props = {
  params:Promise<{ categoria: string }>;
};


export async function  generateMetadata({ params }: Props) {
  
  const {categoria } = await params
  const categeryObject = getCategory(categoria); // Eliminar await en params
  return {
    ...metadataConstants,
    title: ` ${categeryObject?.title} | ${siteName}`,
    description: `Consulte aquí las últimas publicaciones sobre ${categeryObject?.title}, organizadas en un archivo claro y accesible. Nuestro equipo recopila la información más relevante para mantenerle informado con rigor`
  };
}


export default async function CategoryPage({params}: Props) {

  const { categoria } = await params; // Eliminar await ya que params no es una promesa

  const newParams: GetNewParams = { path: 'everything', q: categoria, currentPage: 1 };

  const { articles, current, totalPage } = await getNews(newParams);

  const currentPage = current ? current : 1;
  const total = totalPage ? totalPage : 1;
  const slug = `/noticias/${categoria}/pagina/`;
  const categeryObject = getCategory(categoria);

  return (
    <AosWrapper>
      <TitleComponent
        subTitle={categeryObject?.description}
        title={categeryObject?.title || ''}
        img={`${categeryObject?.image}`}
        breadcumbs={[{ title: categeryObject?.title || '' }]}
      />
      <section className="container pt-0">
        <NewsRowComponent newsItems={articles} />
        <PaginationComponent currentPage={currentPage} totalPage={total} category={slug} />
      </section>
    </AosWrapper>
  );
}
