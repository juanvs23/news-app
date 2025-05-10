export interface ApiParams{
    category?:string,
    apiKey?:string,
    page:number,
    q?:string,
    language?:string,
    country?:string,
    sources?:string,
    pageSize:number
}

export interface GetNewParams{
    language?:string,
    path:string,
    category?:string,
    q?:string,
    country?:string,
    pageSize?:number,
    currentPage?:number,
    sources?:string
}

export enum StatusResponse{
    idle = 'idle',
    loading = 'loading',
    success = 'success',
    failed = 'failed'
}

export interface Response{
    success:boolean,
    status:StatusResponse,
    messages:string
}
