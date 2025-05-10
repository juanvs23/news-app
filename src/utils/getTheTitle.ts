import { categories } from "../routes/categories";

export default function getTheTitle(title:string) {
    const ArrayRoutes = categories
    const route = ArrayRoutes.find((route) => route.name === title)
    return route?.title || title
}