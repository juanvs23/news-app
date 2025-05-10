import { Metadata } from "next";

export const metadataConstants:Metadata = {
    authors: {
        url:'https://coltmandev.dev',
        name: 'Juan Carlos Avila Pérez'
    },
    icons:{
        icon:[
            {url:'/globe.svg',type: 'image/svg+xml'}
        ]
    }

}

export const siteName = 'App News' 
export const settings = {
    pageSize:15
}