export interface RouteItem {
    id: number;
    name: string;
    title: string;
    slug: string;
    description?: string;
    rel?: string;
    image?: string;
    target?: boolean;
}

export type Params ={
    slug:string,
    Name:string
}

export interface BreadCumbInterface {
    slug?:string,
    title: string
}