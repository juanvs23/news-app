import { categories } from "../routes/categories";


export default function getImage(param:string,defaultImage='/image/img_2.jpg'){
    const findImage = categories.find(object=>object.name===param);
    return findImage?.image|| defaultImage;
}