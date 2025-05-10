import Link from "next/link";

export default function PaginationComponent({currentPage,totalPage,category}:{currentPage:number,totalPage:number,category:string}){

    const pageLimit = 6;
    function agruparEnCincos(array:number[]) {
      const resultado = [];
      for (let i = 0; i < array.length; i += pageLimit) {
        resultado.push(array.slice(i, i + pageLimit));
      }
      return resultado;
    }
    const arrayNumber = []
    const totalAvailable =  totalPage < pageLimit ?totalPage:pageLimit;
    for (let number = 1; number<= totalAvailable; number++ ){
      arrayNumber.push(number)
    }
    const paginateSection = agruparEnCincos(arrayNumber)

    const pageList = paginateSection.map(array=>array.includes(currentPage)&&array).filter(item=>item!==false)[0];
    const prevPage = currentPage > 1 ? currentPage - 1:1;
    const nextPage = currentPage < paginateSection[0].length -1 ? currentPage + 1:pageLimit;
    return(
        <nav id="pagination-2" className="pagination-2 section">

        <div className="container">
          <div className="d-flex justify-content-center">
            <ul>
              {
                prevPage > 1 && <li><Link href={`${category}/${prevPage}`}><i className="bi bi-chevron-left"></i></Link></li>
              }
              {
                pageList.map(page=>(
                 <li key={page}>
                   {page==currentPage?<span className="active">{page}</span> :<Link  href={`${category}/${page}`} >{page}</Link> }
                 </li> 
                ))
              }
              {nextPage < pageLimit && <li><Link href={`${category}${nextPage}`}><i className="bi bi-chevron-right"></i></Link></li>}
            </ul>
          </div>
        </div>

      </nav>
    )
}