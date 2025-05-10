import { settings } from './../constants/metadata';

import { ApiParams, GetNewParams } from '../types/axios'
import { axiosInstance } from './axios'
export default async function getNews({path,category,q,country,pageSize,currentPage,sources,language}:GetNewParams) {


    const params:ApiParams = {
        pageSize:pageSize||settings.pageSize,
        page: currentPage|| 1,
        }
    if(category){
        params.category = category
    }
    if (q) {
        params.q = q        
    }
    if(country && path !== 'top-headlines'){
        params.country = country||'us';
    }
    if(sources ){
        params.sources = sources;
    }
    if(language  || path !== 'top-headlines'){
        params.language = 'es';
    }

    params.apiKey = process.env.NEWS_API_KEY||''
    try{
        const  request = await axiosInstance.get(`${path}`,{
            params
        })
        return await { articles: request.data.articles,current:currentPage,status:request.data.status,totalPage:Math.ceil(parseInt(request.data.totalResults)/settings.pageSize)};
    }catch(error){
        return await { articles: [],current:currentPage,status:'fail',totalPage:1,error};

    }
}