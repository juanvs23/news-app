import { RouteItem } from "../types/routes";
/*
  <h4>Others Proyects</h4>
      <ul>
        <li><a href="https://restaurant.coltmandev.dev/" target="_blank">Restaurant - Gericht</a></li>
        <li><a href="https://projects.coltmandev.dev/quotes-generator/" target="_blank">Quotes Generator</a></li>
        <li><a href="https://projects.coltmandev.dev/product-book/" target="_blank">Product Book</a></li>
      </ul>

*/
export const proyectosLink: RouteItem[] =[
    { id: 1, name: 'restaurant-gericht', title: 'Restaurant - Gericht', slug: 'https://restaurant.coltmandev.dev/', target: true },
    {id: 2, name: 'quotes-generator', title: 'Quotes Generator', slug: 'https://projects.coltmandev.dev/quotes-generator/',target: true },
    {id: 3, name: 'product-book', title: 'Product Book', slug: 'https://projects.coltmandev.dev/product-book/',target: true },
] ;