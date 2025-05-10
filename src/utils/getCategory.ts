import { categories } from '../routes/categories';
import { RouteItem } from '../types/routes';
export default function getCategory(name:string,catItem:RouteItem[]=categories){
    const category = catItem.find((category:RouteItem) => category.name === name);
    return category;
}