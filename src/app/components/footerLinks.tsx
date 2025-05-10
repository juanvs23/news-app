import { RouteItem } from "@/src/types/routes";
import Link from "next/link";

export default function FooterLinks({routes,title,external }:{ title:string,routes:RouteItem[],external?:boolean }) {
    return (
        <>
           <h4>{ title }</h4>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
                <Link href={route.slug}  target={external ? "_blank" : "_self"} rel={external ? "noopener noreferrer" : ""}  >
                    {route.title}
                </Link>
          </li>
        ))}
      </ul>
        </>
    );
}