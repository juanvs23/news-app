import { axiosInstance } from './../src/utils/axios';
import {vi,it,describe, expect } from 'vitest';

import  getNews  from '../src/utils/getNews';



// revision de la funcion getNews
describe('getNews',()=>{
    it('should return a list of news',async()=>{

        // simulamos la respuesta de la api
        vi.spyOn(axiosInstance, 'get').mockResolvedValueOnce({
            data: {
                articles: [],current:1,status:'ok',totalPage:1
            }
        });

        // llamamos a la funcion
        const news = await getNews({path:'everything',q:'salud',currentPage:1})

        // verificamos que la respuesta sea la esperada
        expect(news).toEqual({
            articles: [],current:1,status:'ok',totalPage:NaN
        });
    });
})