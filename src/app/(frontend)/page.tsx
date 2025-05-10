import { metadataConstants, siteName } from "../../constants/metadata";
import AosWrapper from "../components/AosWrapper";
import CallToActionComponent from "../components/callToActionComponent";
import FeaturedPosts from "../components/featuredPostsComponents/featuredPosts";
import { GridblogComponent } from "../components/gridBlogComponent";

export const  metadata = {...metadataConstants,title:`Inicio | ${siteName}`}

export default function Home() {
  return (
    <AosWrapper>
      <GridblogComponent/>
      <FeaturedPosts />
      <div className="" data-aos="fade-in" data-aos-delay="100">
      <CallToActionComponent/>
      </div>
    </AosWrapper>
  );
}
